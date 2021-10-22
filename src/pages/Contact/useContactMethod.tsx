import { IconName } from '@fortawesome/fontawesome-svg-core'
import { Text } from 'components'
import { ReactNode } from 'react'
import { useTranslation } from 'hooks'
import CheckStatus from './CheckStatus'
import React from 'react'
import DownloadInvoice from './DownloadInvoice'

const useContactMethods = (): ContactMethod[] => {
  const { t } = useTranslation('CONTACT')

  return [
    {
      icon: 'question',
      key: 'CHECK_STATUS',
      extended: true,
      content: <CheckStatus />
    },

    {
      icon: 'envelope-open-text',
      key: 'EMAIL',
      content: (
        <>
          <Text type="body-2">{t('items.EMAIL.info')}</Text>

          <Text marginTop="s-size" type="subtitle-2">
            {t('items.EMAIL.email')}
          </Text>
        </>
      )
    },

    {
      icon: 'phone-alt',
      key: 'PHONE',
      content: (
        <>
          <Text type="body-2">{t('items.PHONE.info')}</Text>

          <Text marginTop="s-size" type="subtitle-2">
            {t('items.PHONE.mobile')}
          </Text>
        </>
      )
    },

    {
      icon: 'receipt',
      key: 'DOWNLOAD_INVOICE',
      extended: true,
      content: <DownloadInvoice />
    },

    {
      icon: 'map-marked-alt',
      key: 'ADDRESS',
      content: (
        <>
          <Text type="body-2">{t('items.ADDRESS.info')}</Text>

          <Text lineHeight="1.21" marginTop="s-size" type="subtitle-2">
            {t('items.ADDRESS.address1')}
          </Text>

          <Text lineHeight="1.21" type="subtitle-2">
            {t('items.ADDRESS.address2')}
          </Text>

          <Text lineHeight="1.21" type="subtitle-2">
            {t('items.ADDRESS.address3')}
          </Text>

          <Text lineHeight="1.21" type="subtitle-2">
            {t('items.ADDRESS.address4')}
          </Text>
        </>
      )
    },

    {
      icon: 'university',
      key: 'ACCOUNT',
      content: (
        <>
          <Text type="body-2">{t('items.ACCOUNT.info')}</Text>

          <Text marginTop="s-size" type="subtitle-2">
            {t('items.ACCOUNT.nrb')}
          </Text>

          <Text marginTop="s-size" type="body-2">
            {t('items.ACCOUNT.info2')}
          </Text>

          <Text type="body-2">{t('items.ACCOUNT.info3')}</Text>
        </>
      )
    }
  ]
}

type ContactMethod = {
  content: ReactNode
  extended?: boolean
  icon?: IconName
  key:
    | 'CHECK_STATUS'
    | 'EMAIL'
    | 'DOWNLOAD_INVOICE'
    | 'ADDRESS'
    | 'PHONE'
    | 'ACCOUNT'
}

export default useContactMethods
