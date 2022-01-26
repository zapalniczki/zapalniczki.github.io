import { marketingStatus } from 'braty-common'
import { Banner, Flexbox, Page, Switch, Text } from 'components'
import { usePageTitle, useScrollTop, useTest, useTranslation } from 'hooks'
import React, { useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import FormModal from './FormModal'
import statusToColumns from './statusToColumns'
import Table from './Table'

const AdminMarketing = () => {
  const { t: commonT } = useTranslation('COMMON')
  const { t } = useTranslation('ADMIN_MARKETING')

  const isTest = useTest()
  const [testData, setTestData] = useState(isTest)

  useScrollTop()
  usePageTitle(t('title'))

  return (
    <Page>
      <Banner marginBottom="xxl-size" size="SMALL" title={t('title')} />

      <Flexbox justifyContent="flex-end" marginBottom="m-size">
        <Switch
          checked={testData}
          label={t('testDataEnabled')}
          marginRight="l-size"
          onChange={setTestData}
        />

        <FormModal />
      </Flexbox>

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
              testData={testData}
            />
          </TabPanel>
        ))}
      </Tabs>
    </Page>
  )
}

export default AdminMarketing
