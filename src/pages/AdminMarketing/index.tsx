import { Banner, Flexbox, Page, Switch } from 'components'
import { useTest, usePageTitle, useScrollTop, useTranslation } from 'hooks'
import React, { useState } from 'react'
import FormModal from './FormModal'
import List from './List'

const AdminMarketing = () => {
  const { t } = useTranslation('ADMIN_MARKETING')

  const isTest = useTest()
  const [testDataEnabled, setTestDataEnabled] = useState(isTest)

  useScrollTop()
  usePageTitle(t('title'))

  return (
    <Page>
      <Banner marginBottom="xxl-size" size="SMALL" title={t('title')} />

      <Flexbox justifyContent="flex-end" marginBottom="m-size">
        <Switch
          checked={testDataEnabled}
          label={t('testDataEnabled')}
          marginRight="l-size"
          onChange={setTestDataEnabled}
        />

        <FormModal />
      </Flexbox>

      <List testDataEnabled={testDataEnabled} />
    </Page>
  )
}

export default AdminMarketing
