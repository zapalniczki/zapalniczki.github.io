import { IconName } from '@fortawesome/fontawesome-svg-core'
import { Text } from 'components'
import { ReactNode } from 'react'
import { useTranslation } from 'hooks'
import CheckStatus from './CheckStatus'
import React from 'react'

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
      icon: 'map-marked-alt',
      key: 'ADDRESS',
      content: (
        <>
          <Text type="body-2">{t('items.ADDRESS.info')}</Text>

          <Text marginTop="s-size" type="subtitle-2" lineHeight="1.21">
            {t('items.ADDRESS.address1')}
          </Text>
          <Text type="subtitle-2" lineHeight="1.21">
            {t('items.ADDRESS.address2')}
          </Text>
          <Text type="subtitle-2" lineHeight="1.21">
            {t('items.ADDRESS.address3')}
          </Text>
          <Text type="subtitle-2" lineHeight="1.21">
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
  icon?: IconName
  key: string
  extended?: boolean
  content: ReactNode
}

export default useContactMethods
