import { getOrders } from 'api'
import { DB_TABLES, Mold, Order, Language } from 'braty-common'
import {
  Box,
  DisplayDate,
  DisplayMoney,
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
import differenceInDays from 'date-fns/differenceInDays'
import parseISO from 'date-fns/parseISO'
import { useTest, useTranslation } from 'hooks'
import { GetOrdersResponseItem } from 'models'
import React, { useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { getLanguageLabel, getOrderPath } from 'utils'
import EditModal from './EditModal'
import { AdminTableColumns } from './statusToColumns'

type Props = {
  columns: AdminTableColumns[]
  status: Order['status']
}

const Table = ({ columns, status }: Props) => {
  const { language, t } = useTranslation('ADMIN_ORDERS')
  const { t: commonT } = useTranslation('COMMON')

  const isTest = useTest()
  const [testData, setTestData] = useState(isTest)

  const params: Pick<Order, 'status' | 'is_test'> = {
    status,
    is_test: testData
  }

  const ordersQuery = useQuery([DB_TABLES.ORDER, params], () =>
    getOrders(params)
  )

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
            const data = shapeData(orders, language)

            return <NativeTable columns={columnsMemo} data={data} />
          }}
        </QueryLoader>
      </Box>
    </Tile>
  )
}

const shapeData = (
  data: GetOrdersResponseItem[],
  language: Language
): Record<AdminTableColumns, string | boolean | number | JSX.Element>[] =>
  data.map((order) => ({
    created_at: <DisplayDate>{order.created_at}</DisplayDate>,
    email: order.customerEmail.email,
    customer_name: order.customerName.full_name,
    phone: order.customerPhone.phone,
    delivery_type: order.deliveryType.label_pl,
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
    updated_at: <DisplayDate>{order.updated_at}</DisplayDate>,
    order_time: differenceInDays(
      parseISO(order.created_at),
      parseISO(order.updated_at)
    ),
    sum: <DisplayMoney>{order[`total_${language}`]}</DisplayMoney>,
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
          const productName = getLanguageLabel({
            language,
            label: product.product,
            name: true
          })

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
          const productName = getLanguageLabel({
            language,
            label: product.product,
            name: true
          })

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
