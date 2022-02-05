import { IconName } from '@fortawesome/fontawesome-svg-core'
import { ExternalLink, Text } from 'components'
import { ReactNode } from 'react'
import { useTranslation } from 'hooks'
import CheckStatus from './CheckStatus'
import React from 'react'
import DownloadInvoice from './DownloadInvoice'
import {
  BRATY_ADDRESS_1,
  BRATY_ADDRESS_2,
  BRATY_ADDRESS_3,
  BRATY_BANK_ACCOUNT,
  BRATY_BANK_NAME,
  BRATY_PHONE
} from 'braty-common'

const useContactMethods = (): ContactMethod[] => {
  const { t } = useTranslation('CONTACT')

  return [
    {
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

          <ExternalLink marginTop="s-size" to={t('items.EMAIL.link')}>
            <Text type="subtitle-2">{t('items.EMAIL.email')}</Text>
          </ExternalLink>
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
            {BRATY_PHONE}
          </Text>
        </>
      )
    },

    {
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
            {BRATY_ADDRESS_1}
          </Text>

          <Text lineHeight="1.21" type="subtitle-2">
            {BRATY_ADDRESS_2}
          </Text>

          <Text lineHeight="1.21" type="subtitle-2">
            {BRATY_ADDRESS_3}
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
            {BRATY_BANK_ACCOUNT}
          </Text>

          <Text marginTop="s-size" type="body-2">
            {t('items.ACCOUNT.info2', { bankName: BRATY_BANK_NAME })}
          </Text>

          <Text type="body-2">{t('items.ACCOUNT.info3')}</Text>
        </>
      )
    }
  ]
}

type ContactMethod = {
  content?: ReactNode
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
