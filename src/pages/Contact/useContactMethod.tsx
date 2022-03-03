import { IconName } from '@fortawesome/fontawesome-svg-core'
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
import { ExternalLink, LabelledItem, Text } from 'components'
import { useTranslation } from 'hooks'
import React, { ReactNode } from 'react'
import { getEmail } from 'utils'
import CheckStatus from './CheckStatus'
import DownloadInvoice from './DownloadInvoice'
import TileContent from './TileContent'
import TileHeading from './TileHeading'

const useContactMethod = (): ContactMethod[] => {
  const { t } = useTranslation('CONTACT')
  const { t: commonT } = useTranslation('COMMON')

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
              to={getEmail(BRATY_EMAIL, commonT('emailSubject'))}
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
            <LabelledItem
              item={BRATY_BANK_NAME}
              label={t('items.ACCOUNT.bankName', { bankName: BRATY_BANK_NAME })}
            />

            <LabelledItem
              item={BRATY_BIC}
              label={t('items.ACCOUNT.bic')}
              marginTop="2rem"
            />

            <LabelledItem
              item={BRATY_IBAN}
              label={t('items.ACCOUNT.iban')}
              marginTop="2rem"
            />

            <LabelledItem
              item={t('items.ACCOUNT.titleVal')}
              label={t('items.ACCOUNT.titleRef')}
              marginTop="2rem"
            />
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
