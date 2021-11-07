import { Banner, Heading, Page, Text } from 'components'
import { useScrollTop, useTabTitle, useTranslation } from 'hooks'
import { ORDER_STATUSES } from 'models'
import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import statusToColumns from './statusToColumns'
import Table from './Table'

const AdminOrders = () => {
  const { t: commonT } = useTranslation('COMMON')
  const { t } = useTranslation('ADMIN_ORDERS')

  useScrollTop()
  useTabTitle(t('title'))

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
