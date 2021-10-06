import { useGetOrders } from 'api'
import { Box, QueryLoader } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'
import Row, { AdminTableColumns } from './Row'
import { OrderStatus } from 'models'

type Props = {
  status: OrderStatus
  columns: AdminTableColumns[]
}

const Table = ({ columns, status }: Props) => {
  const { t } = useTranslation('ADMIN_ORDERS')
  const ordersQuery = useGetOrders(status)

  return (
    <QueryLoader query={ordersQuery}>
      {(orders) => (
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
            {orders.map((order) => (
              <Row columns={columns} key={order.id} order={order} />
            ))}

            {!orders.length && (
              <tr>
                <td>{t('emptyState')}</td>
              </tr>
            )}
          </tbody>
        </Box>
      )}
    </QueryLoader>
  )
}

export default Table
