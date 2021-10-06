import { Banner, Heading, Page } from 'components'
import { useDocumentTitle, useScrollTop, useTranslation } from 'hooks'
import React from 'react'
import List from './List'

const AdminCallbacks = () => {
  const { t } = useTranslation('ADMIN_CALLBACKS')

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

      <List />
    </Page>
  )
}

export default AdminCallbacks
