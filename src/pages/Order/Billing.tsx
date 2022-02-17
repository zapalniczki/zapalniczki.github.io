import {
  DisplayMoney,
  LabelledItem,
  SectionHead,
  Separator,
  Tile
} from 'components'
import { useTranslation } from 'hooks'
import { GetOrderResponse } from 'models'
import React from 'react'
import { getVatAmount } from 'utils'

type Props = Pick<
  GetOrderResponse,
  | 'products_price_pl'
  | 'products_price_en'
  | 'delivery_price_pl'
  | 'delivery_price_en'
  | 'payment_price_pl'
  | 'payment_price_en'
  | 'discount_pl'
  | 'discount_en'
  | 'total_pl'
  | 'total_en'
>

const Billing = ({ ...props }: Props) => {
  const t = useTranslation('ORDER').withBase('SECTIONS.BILLING')
  const { language } = useTranslation('ORDER')

  const discount = props[`discount_${language}`]
  const deliveryPrice = props[`delivery_price_${language}`]
  const paymentPrice = props[`payment_price_${language}`]
  const productsPrice = props[`products_price_${language}`]
  const total = props[`total_${language}`]
  const vat = getVatAmount(total)

  return (
    <Tile marginTop="m-size">
      <SectionHead separator title={t('title')} />

      <LabelledItem
        item={<DisplayMoney>{productsPrice}</DisplayMoney>}
        label={t('LABELS.products_price')}
      />

      {deliveryPrice ? (
        <LabelledItem
          item={<DisplayMoney>{deliveryPrice}</DisplayMoney>}
          label={t('LABELS.delivery_price')}
          marginTop="m-size"
        />
      ) : null}

      {paymentPrice ? (
        <LabelledItem
          item={<DisplayMoney>{paymentPrice}</DisplayMoney>}
          label={t('LABELS.payment_price')}
          marginTop="m-size"
        />
      ) : null}

      {discount ? (
        <LabelledItem
          item={<DisplayMoney negative>{discount}</DisplayMoney>}
          label={t('LABELS.discount')}
          marginTop="m-size"
        />
      ) : null}

      <Separator />

      <LabelledItem
        item={<DisplayMoney>{total}</DisplayMoney>}
        label={t('LABELS.grand_total')}
      />

      <LabelledItem
        item={<DisplayMoney>{vat}</DisplayMoney>}
        label={t('LABELS.vat')}
        marginTop="m-size"
      />
    </Tile>
  )
}

export default Billing
