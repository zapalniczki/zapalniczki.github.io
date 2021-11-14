import { getOrders } from 'api'
import {
  Box,
  DisplayDate,
  ExternalLink,
  Flexbox,
  Link,
  QueryLoader,
  ResultIcon,
  SectionHead,
  Switch,
  Table as NativeTable,
  Text,
  Tile
} from 'components'
import { ORDER_TABLE } from 'constants/db_tables'
import differenceInDays from 'date-fns/differenceInDays'
import parseISO from 'date-fns/parseISO'
import { TranslateFunc, useDev, useTranslation } from 'hooks'
import { GetOrdersResponseItem, Mold, Order } from 'models'
import React, { useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { displayMoney, getOrderPath, getProductName } from 'utils'
import EditModal from './EditModal'
import { AdminTableColumns } from './statusToColumns'

type Props = {
  columns: AdminTableColumns[]
  status: Order['status']
}

const Table = ({ columns, status }: Props) => {
  const { t } = useTranslation('ADMIN_ORDERS')
  const { t: commonT } = useTranslation('COMMON')

  const isDev = useDev()
  const [testData, setTestData] = useState(isDev)

  const params: Pick<Order, 'status' | 'is_test'> = {
    status,
    is_test: testData
  }

  const ordersQuery = useQuery([ORDER_TABLE, params], () => getOrders(params))

  const columnsMemo = useMemo(
    () =>
      columns.map((column) => ({
        Header: commonT(`TABLE_HEADERS.${column}`),
        accessor: column
      })),

    []
  )

  return (
    <Tile>
      <SectionHead separator title={commonT(`ORDER_STATUSES.${status}`)} />

      <Text type="subtitle-1">{t(`STATUSES_INFO.${status}`)}</Text>

      <Flexbox justifyContent="flex-end" marginTop="m-size">
        <Switch
          checked={testData}
          label={t('testData')}
          onChange={(value) => setTestData(value)}
        />
      </Flexbox>

      <Box marginTop="m-size" overflowX="scroll" overflowY="auto" width="100%">
        <QueryLoader query={ordersQuery}>
          {(orders) => {
            const data = shapeData(orders, commonT)

            return <NativeTable columns={columnsMemo} data={data} />
          }}
        </QueryLoader>
      </Box>
    </Tile>
  )
}

const shapeData = (
  data: GetOrdersResponseItem[],
  t: TranslateFunc
): Record<AdminTableColumns, string | boolean | number | JSX.Element>[] =>
  data.map((order) => ({
    created_at: <DisplayDate>{order.created_at}</DisplayDate>,
    customer_email: order.customerEmail.email,
    customer_name: order.customerName.full_name,
    customer_phone: order.customerPhone.phone,
    delivery_yype: order.deliveryType.label,
    client: (
      <Flexbox flexDirection="column">
        <Text fontWeight="bold" type="body-2">
          {order.customerName.full_name}
        </Text>

        <Text type="body-2">{order.customerPhone.phone}</Text>

        <Text type="body-2">{order.customerEmail.email}</Text>
      </Flexbox>
    ),

    id: <Link label={order.id} showUnderline to={getOrderPath(order.id)} />,
    is_company: true,
    status: order.status,
    total: order.total,
    updated_at: <DisplayDate>{order.updated_at}</DisplayDate>,
    order_time: differenceInDays(
      parseISO(order.created_at),
      parseISO(order.updated_at)
    ),
    sum: displayMoney(order.total),
    delivery_type: order.deliveryType.label,
    boxes_count:
      order.products
        ?.map((product) => product.quantity)
        .reduce((prev, curr) => prev + curr, 0) || 0,
    delivery_id: order.parcel ? (
      <ExternalLink to={order.parcel.link}>{order.parcel.ref}</ExternalLink>
    ) : (
      '-'
    ),
    _products: (
      <>
        {order.products.map((product) => {
          const productName = getProductName(
            t('productNameBase'),
            product.product.label.label,
            product.product.icon.label
          )

          return (
            <Text key={product.id} type="body-2">
              {/* eslint-disable-next-line react/jsx-newline */}
              {productName} x {product.quantity}
            </Text>
          )
        })}
      </>
    ),
    get products() {
      return this._products
    },
    set products(value) {
      this._products = value
    },

    molds: (
      <>
        {order.products.map((product) => {
          const productName = getProductName(
            t('productNameBase'),
            product.product.label.label,
            product.product.icon.label
          )

          return (
            <Flexbox
              alignItems="center"
              height="100%"
              key={product.id}
              width="100%"
            >
              <ResultIcon
                size="1x"
                variant={moldStatusToVariant[product.product.mold.status]}
              />

              <Text marginLeft="m-size" type="body-2">
                {productName}
              </Text>
            </Flexbox>
          )
        })}
      </>
    ),
    edit: (
      <EditModal
        id={order.id}
        parcelId={order.parcel?.id}
        parcelLink={order.parcel?.link}
        parcelRef={order.parcel?.ref}
        status={order.status}
      />
    )
  }))

const moldStatusToVariant: Record<
  Mold['status'],
  'SUCCESS' | 'ERROR' | 'INFO'
> = {
  DONE: 'SUCCESS',
  IN_PROGRESS: 'INFO',
  UNDONE: 'ERROR'
}

export default Table
