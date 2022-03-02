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
  BRATY_BANK_NAME,
  BRATY_BIC,
  BRATY_EMAIL,
  BRATY_IBAN,
  BRATY_PHONE
} from 'braty-common'
import { Trans } from 'react-i18next'
import TileHeading from './TileHeading'
import TileContent from './TileContent'

const useContactMethod = (): ContactMethod[] => {
  const { t } = useTranslation('CONTACT')

  return [
    {
      key: 'CHECK_STATUS',
      extended: true,
      content: <CheckStatus />
    },

    {
      key: 'EMAIL',
      content: (
        <>
          <TileHeading
            icon="envelope-open-text"
            title={t(`items.EMAIL.title`)}
          />

          <TileContent>
            <ExternalLink
              marginTop="s-size"
              to={t('items.EMAIL.link', { email: BRATY_EMAIL })}
            >
              <Text type="subtitle-2">{BRATY_EMAIL}</Text>
            </ExternalLink>
          </TileContent>
        </>
      )
    },

    {
      key: 'PHONE',
      content: (
        <>
          <TileHeading icon="phone-alt" title={t(`items.PHONE.title`)} />

          <TileContent>
            <Text marginTop="s-size" type="subtitle-2">
              {BRATY_PHONE}
            </Text>
          </TileContent>
        </>
      )
    },

    {
      key: 'DOWNLOAD_INVOICE',
      extended: true,
      content: <DownloadInvoice />
    },

    {
      key: 'ACCOUNT',
      content: (
        <>
          <TileHeading icon="university" title={t(`items.ACCOUNT.title`)} />

          <TileContent>
            <Text marginTop="s-size" type="body-2">
              <Trans
                i18nKey="items.ACCOUNT.bankName"
                t={t}
                values={{ bankName: BRATY_BANK_NAME }}
              />
            </Text>

            <Text type="body-2">
              <Trans i18nKey="items.ACCOUNT.ref" t={t} />
            </Text>

            <Text type="body-2">
              <Trans
                i18nKey="items.ACCOUNT.iban"
                t={t}
                values={{ iban: BRATY_IBAN }}
              />
            </Text>

            <Text type="body-2">
              <Trans
                i18nKey="items.ACCOUNT.bic"
                t={t}
                values={{ bic: BRATY_BIC }}
              />
            </Text>
          </TileContent>
        </>
      )
    },

    {
      key: 'ADDRESS',
      content: (
        <>
          <TileHeading icon="map-marked-alt" title={t(`items.ADDRESS.title`)} />

          <TileContent>
            <Text lineHeight="1.21" marginTop="s-size" type="subtitle-2">
              {BRATY_ADDRESS_1}
            </Text>

            <Text lineHeight="1.21" type="subtitle-2">
              {BRATY_ADDRESS_2}
            </Text>

            <Text lineHeight="1.21" type="subtitle-2">
              {BRATY_ADDRESS_3}
            </Text>
          </TileContent>
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

export default useContactMethod
