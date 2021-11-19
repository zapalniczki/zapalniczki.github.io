import { Banner, Page, Text } from 'components'
import { useScrollTop, usePageTitle, useTranslation } from 'hooks'
import { ORDER_STATUSES } from 'models'
import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import statusToColumns from './statusToColumns'
import Table from './Table'

const AdminOrders = () => {
  const { t: commonT } = useTranslation('COMMON')
  const { t } = useTranslation('ADMIN_ORDERS')

  useScrollTop()
  usePageTitle(t('title'))

  return (
    <Page>
      <Banner marginBottom="xxl-size" size="SMALL" title={t('title')} />

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
            <Table
              columns={statusToColumns[status]}
              key={status}
              status={status}
            />
          </TabPanel>
        ))}
      </Tabs>
    </Page>
  )
}

export default AdminOrders
