import { Banner, Flexbox, Page } from 'components'
import { usePageTitle, useScrollTop, useTranslation } from 'hooks'
import React from 'react'
import FormModal from './FormModal'
import List from './List'

const AdminMarketing = () => {
  const { t } = useTranslation('ADMIN_MARKETING')

  useScrollTop()
  usePageTitle(t('title'))

  return (
    <Page>
      <Banner marginBottom="xxl-size" size="SMALL" title={t('title')} />

      <Flexbox justifyContent="flex-end" marginBottom="m-size">
        <FormModal />
      </Flexbox>

      <List />
    </Page>
  )
}

export default AdminMarketing
