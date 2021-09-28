import { useGetOrders } from 'api'
import { Box, QueryLoader } from 'components'
import isBefore from 'date-fns/isBefore'
import React from 'react'
import { useTranslation } from 'hooks'
import { getDateFromTimestamp } from 'utils'
import Row, { AdminTableColumns } from './Row'
import { OrderStatus } from 'models'

type Props = {
  status: OrderStatus
  columns: AdminTableColumns[]
}

const Table = ({ status, columns }: Props) => {
  const { t } = useTranslation('ADMIN_ORDERS')
  const ordersQuery = useGetOrders(status)

  return (
    <QueryLoader query={ordersQuery}>
      {(orders) => {
        return (
          <Box
            as="table"
            border="1px solid"
            borderColor="border-color"
            width="100%"
          >
            {orders.length > 0 && (
              <thead>
                <tr>
                  {columns.map((column) => (
                    <Box
                      as="th"
                      backgroundColor="background-color-01"
                      key={column}
                    >
                      <h5>{t(`headers.${column}`)}</h5>
                    </Box>
                  ))}

                  <Box as="th" backgroundColor="background-color-01">
                    <h5>{t('headers.status')}</h5>
                  </Box>
                </tr>
              </thead>
            )}

            <tbody>
              {sortOrders(orders).map((order) => (
                <Row columns={columns} key={order.id} order={order} />
              ))}

              {!orders.length && (
                <tr>
                  <td>{t('emptyState')}</td>
                </tr>
              )}
            </tbody>
          </Box>
        )
      }}
    </QueryLoader>
  )
}

const sortOrders = (orders: OrderOLD[]) =>
  orders.sort((prev, next) =>
    isBefore(
      getDateFromTimestamp(prev.modifiedAt),
      getDateFromTimestamp(next.modifiedAt)
    )
      ? -1
      : 1
  )

export default Table
