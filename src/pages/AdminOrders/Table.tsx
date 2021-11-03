import { getOrders } from 'api'
import {
  Box,
  Heading,
  QueryLoader,
  Tile,
  Table as NativeTable,
  DisplayDate,
  Link,
  Flexbox,
  Text,
  ExternalLink
} from 'components'
import React, { useMemo } from 'react'
import { useTranslation } from 'hooks'
import { GetOrdersResponseItem, OrderStatus } from 'models'
import { AdminTableColumns } from './statusToColumns'
import differenceInDays from 'date-fns/differenceInDays'
import parseISO from 'date-fns/parseISO'
import { displayMoney, getOrderPath } from 'utils'
import EditModal from './EditModal'
import { useQuery } from 'react-query'
import { ORDER_TABLE } from 'constants/db_tables'

type Props = {
  columns: AdminTableColumns[]
  status: OrderStatus
}

const Table = ({ columns, status }: Props) => {
  const { t } = useTranslation('ADMIN_ORDERS')
  const { t: commonT } = useTranslation('COMMON')

  const ordersQuery = useQuery([ORDER_TABLE, { status }], () =>
    getOrders(status)
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
      <Heading level={6} marginY="l-size">
        {t(`STATUSES_INFO.${status}`)}
      </Heading>

      <Box minHeight="50rem" overflowX="scroll" overflowY="auto" width="100%">
        <QueryLoader query={ordersQuery}>
          {(orders) => {
            const data = shapeData(orders)

            return <NativeTable columns={columnsMemo} data={data} />
          }}
        </QueryLoader>
      </Box>
    </Tile>
  )
}

const shapeData = (
  data: GetOrdersResponseItem[]
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
    // products: order.products,
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
    molds: (
      <>
        {order.products.map((product) => (
          <p key={product.id}>{product.id}</p>
        ))}
      </>
    ),
    edit: <EditModal id={order.id} status={order.status} />

    // molds: uniq(
    //   order.products?.map((product) => ({
    //     productId: product.id
    //   }))
    // ).map((mold) => {
    //   const displayName = mold.productId

    //   let status: MoldStatus | null = null

    //   if (moldsData) {
    //     // const alfa = moldsData.find(
    //     //   (dbMold) => dbMold.productId === mold.productId
    //     // )

    //     status = null
    //   }

    //   let color = 'red'
    //   if (status === 'DONE') {
    //     color = 'green'
    //   }

    //   if (status === 'IN_PROGRESS') {
    //     color = 'yellow'
    //   }

    //   return (
    //     <Box color={color} key={displayName}>
    //       {displayName}
    //     </Box>
    //   )
    // })
  }))

export default Table
