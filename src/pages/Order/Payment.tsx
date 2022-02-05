import {
  BRATY_ADDRESS_1,
  BRATY_BANK_ACCOUNT,
  BRATY_BANK_NAME
} from 'braty-common'
import { SectionHead, Tile, Text, LabelledItem } from 'components'
import { useTranslation } from 'hooks'
import { GetOrderResponse } from 'models'
import React from 'react'
import { displayMoney } from 'utils'

type Props = Pick<GetOrderResponse, 'id' | 'total' | 'status'>

const Payment = ({ id, status, total }: Props) => {
  const t = useTranslation('ORDER').withBase('SECTIONS.PAYMENT')

  if (status !== 'CONFIRMED') {
    return null
  }

  return (
    <Tile marginTop="m-size">
      <SectionHead separator title={t('title')} />

      <Text type="body-2">{t('info')}</Text>

      <LabelledItem
        item={BRATY_BANK_NAME}
        label={t('LABELS.bankName')}
        marginTop="m-size"
      />

      <LabelledItem
        item={BRATY_BANK_ACCOUNT}
        label={t('LABELS.nrb')}
        marginTop="m-size"
      />

      <LabelledItem
        item={BRATY_ADDRESS_1}
        label={t('LABELS.recipient')}
        marginTop="m-size"
      />

      <LabelledItem item={id} label={t('LABELS.title')} marginTop="m-size" />

      <LabelledItem
        item={displayMoney(total)}
        label={t('LABELS.amount')}
        marginTop="m-size"
      />
    </Tile>
  )
}

export default Payment
