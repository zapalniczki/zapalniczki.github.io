import { Banner, Box, Heading, Page, Text, Tile } from 'components'
import React from 'react'
import { useDocumentTitle, useScrollTop, useTranslation } from 'hooks'
import { AdminTableColumns } from './Row'
import Table from './Table'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { OrderStatus, ORDER_STATUSES } from 'models'

const AdminOrders = () => {
  const { t: commonT } = useTranslation('COMMON')
  const { t } = useTranslation('ADMIN_ORDERS')

  useScrollTop()
  useDocumentTitle(t('title'))

  return (
    <Page>
      <Banner
        horizonal
        marginBottom="xxl-size"
        small
        title={<Heading level={4}>{t('title')}</Heading>}
      />

      <Tabs>
        <TabList>
          {ORDER_STATUSES.map((status) => (
            <Tab key={status}>
              <Text type="button">{commonT(`ORDER_STATUSES.${status}`)}</Text>
            </Tab>
          ))}
        </TabList>

        {ORDER_STATUSES.map((status) => (
          <TabPanel key={status}>
            <Tile>
              <Heading level={6} marginY="l-size">
                {t(`STATUSES_INFO.${status}`)}
              </Heading>
              <Box
                minHeight="50rem"
                overflowX="scroll"
                overflowY="auto"
                width="100%"
              >
                <Table columns={statusToColumns[status]} status={status} />
              </Box>
            </Tile>
          </TabPanel>
        ))}
      </Tabs>
    </Page>
  )
}

const statusToColumns: Record<OrderStatus, AdminTableColumns[]> = {
  OPEN: [
    'id',
    'createdAt',
    'customerName',
    'customerPhone',
    'customerEmail',
    'sum'
  ],
  CONFIRMED: ['id', 'updatedAt', 'sum'],
  PAYMENT_RECEIVED: [
    'id',
    'updatedAt',
    'boxesCount'
    //  'molds'
  ],
  IN_PREPARATION: ['id', 'updatedAt', 'isCompany', 'deliveryType', 'sum'],
  AWAITING_FOR_PICKUP: ['id', 'updatedAt', 'deliveryType', 'deliveryId'],
  IN_DELIVERY: ['id', 'updatedAt', 'deliveryType', 'deliveryId'],
  COMPLETED: ['id', 'createdAt', 'updatedAt', 'orderTime', 'sum']
}

export default AdminOrders
