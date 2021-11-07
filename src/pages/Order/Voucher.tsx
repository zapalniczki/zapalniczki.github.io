import { LabelledItem, SectionHead, Tile } from 'components'
import { useTranslation } from 'hooks'
import { GetOrderResponse } from 'models'
import React from 'react'

type Props = Pick<GetOrderResponse, 'voucher'>

const Voucher = ({ voucher }: Props) => {
  const t = useTranslation('ORDER').withBase('SECTIONS.VOUCHER')

  if (!voucher) {
    return null
  }

  const amount = `-${voucher.discount}${voucher.is_fixed ? 'zł' : '%'}`

  return (
    <Tile marginTop="m-size">
      <SectionHead separator title={t('title')} />

      <LabelledItem item={voucher.id} label={t('LABELS.voucher_id')} />

      <LabelledItem
        item={amount}
        label={t('LABELS.voucher_value')}
        marginTop="m-size"
      />
    </Tile>
  )
}

export default Voucher