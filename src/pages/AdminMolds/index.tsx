import { Banner, Page } from 'components'
import { useScrollTop, usePageTitle, useTranslation } from 'hooks'
import React from 'react'
import List from './List'

const AdminMolds = () => {
  const { t } = useTranslation('ADMIN_MOLDS')

  useScrollTop()
  usePageTitle(t('title'))

  return (
    <Page>
      <Banner marginBottom="xxl-size" size="SMALL" title={t('title')} />

      <List />
    </Page>
  )
}

export default AdminMolds
