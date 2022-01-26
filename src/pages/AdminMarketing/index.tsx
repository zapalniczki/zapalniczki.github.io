import { marketingStatus } from 'braty-common'
import { Banner, Page, Text } from 'components'
import { usePageTitle, useScrollTop, useTranslation } from 'hooks'
import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import statusToColumns from './statusToColumns'
import Table from './Table'

const AdminMarketing = () => {
  const { t: commonT } = useTranslation('COMMON')
  const { t } = useTranslation('ADMIN_MARKETING')

  useScrollTop()
  usePageTitle(t('title'))

  return (
    <Page>
      <Banner marginBottom="xxl-size" size="SMALL" title={t('title')} />

      <Tabs>
        <TabList>
          {marketingStatus.options.map((status) => (
            <Tab key={status}>
              <Text type="button">
                {commonT(`MARKETING_STATUSES.${status}`)}
              </Text>
            </Tab>
          ))}
        </TabList>

        {marketingStatus.options.map((status) => (
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

export default AdminMarketing
