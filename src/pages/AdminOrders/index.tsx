import { Banner, Heading, Page, Text } from 'components'
import React from 'react'
import { useDocumentTitle, useScrollTop, useTranslation } from 'hooks'
import Table from './Table'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { ORDER_STATUSES } from 'models'
import statusToColumns from './statusToColumns'

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
