import { Banner, Page } from 'components'
import { useScrollTop, useTabTitle, useTranslation } from 'hooks'
import React from 'react'
import List from './List'

const AdminPaymentTypes = () => {
  const { t } = useTranslation('ADMIN_PAYMENT_TYPES')

  useScrollTop()
  useTabTitle(t('title'))

  return (
    <Page>
      <Banner marginBottom="xxl-size" size="SMALL" title={t('title')} />

      <List />
    </Page>
  )
}

export default AdminPaymentTypes
