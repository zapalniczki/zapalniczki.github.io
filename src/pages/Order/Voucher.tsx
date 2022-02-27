import { LabelledItem, SectionHead, Tile } from 'components'
import { useTranslation } from 'hooks'
import { GetOrderResponse } from 'models'
import React from 'react'

type Props = Pick<GetOrderResponse, 'voucher'>

const Voucher = ({ voucher }: Props) => {
  const t = useTranslation('ORDER').withBase('SECTIONS.VOUCHER')
  const { language } = useTranslation('ORDER')

  if (!voucher) {
    return null
  }

  const discount = voucher[`discount_${language}`]
  const amount = `-${discount}${voucher.is_fixed ? 'zł' : '%'}`

  return (
    <Tile>
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
