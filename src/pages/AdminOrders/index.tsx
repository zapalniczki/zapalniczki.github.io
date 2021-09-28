import { Box, Page, Tile } from 'components'
import ORDER_STATUSES from 'constants/orderStatuses'
import { OrderStatus } from 'models/order'
import React from 'react'
import { useScrollTop, useTranslation } from 'hooks'
import { AdminTableColumns } from './Row'
import Table from './Table'

const AdminOrders = () => {
  const { t: commonT } = useTranslation('COMMON')
  const { t } = useTranslation('ADMIN_ORDERS')

  useScrollTop()

  return (
    <Page>
      {ORDER_STATUSES.map((status, index) => (
        <Tile key={status} marginTop={index === 0 ? 0 : '3rem'}>
          <Box as="h2" marginY="m-size">
            {commonT(`orderStatuses.${status}`)}
          </Box>
          <Box as="h5" margin={0} marginBottom="m-size">
            {t(`statusesInfo.${status}`)}
          </Box>
          <Table columns={statusToColumns[status]} status={status} />
        </Tile>
      ))}
    </Page>
  )
}

const statusToColumns: Record<OrderStatus, AdminTableColumns[]> = {
  OPEN: [
    'id',
    'createdAt',
    'customerType',
    'customerName',
    'customerPhone',
    'customerEmail',
    'sum'
  ],
  PAYMENT_RECEIVED: ['id', 'modifiedAt', 'boxesCount', 'molds'],
  IN_PREPARATION: [
    'id',
    'modifiedAt',
    'createdAt',
    'customerType',
    'deliveryType',
    'sum'
  ],
  AWAITING_FOR_PICKUP: ['id', 'modifiedAt', 'deliveryType', 'deliveryId'],
  IN_DELIVERY: ['id', 'modifiedAt', 'deliveryType', 'deliveryId'],
  COMPLETED: ['id', 'modifiedAt', 'createdAt', 'orderTime', 'sum']
}

export default AdminOrders
