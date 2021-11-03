import { SectionHead, Tile, Text, LabelledItem } from 'components'
import { useTranslation } from 'hooks'
import { GetOrderResponse } from 'models'
import React from 'react'
import { displayMoney } from 'utils'

type Props = Pick<GetOrderResponse, 'id' | 'total' | 'status'>

const Payment = ({ id, status, total }: Props) => {
  const { t: commonT } = useTranslation('COMMON')
  const t = useTranslation('ORDER').withBase('SECTIONS.PAYMENT')

  if (status !== 'CONFIRMED') {
    return null
  }

  return (
    <Tile marginTop="m-size">
      <SectionHead separator title={t('title')} />

      <Text type="body-2">{t('info')}</Text>

      <LabelledItem
        item={commonT('bankName')}
        label={t('LABELS.bankName')}
        marginTop="m-size"
      />

      <LabelledItem
        item={commonT('nrb')}
        label={t('LABELS.nrb')}
        marginTop="m-size"
      />

      <LabelledItem
        item={commonT('fullCompanyName')}
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
