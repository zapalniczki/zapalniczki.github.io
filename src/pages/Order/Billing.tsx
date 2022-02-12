import { LabelledItem, SectionHead, Separator, Tile } from 'components'
import { useTranslation } from 'hooks'
import { GetOrderResponse } from 'models'
import React from 'react'
import { displayMoney, getVatAmount } from 'utils'

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
  | 'total'
>

const Billing = ({ ...props }: Props) => {
  const t = useTranslation('ORDER').withBase('SECTIONS.BILLING')
  const { currentLanguage } = useTranslation('ORDER')

  const discount = props[`discount_${currentLanguage}`]
  const deliveryPrice = props[`delivery_price_${currentLanguage}`]
  const paymentPrice = props[`payment_price_${currentLanguage}`]
  const productsPrice = props[`products_price_${currentLanguage}`]
  const total = props[`total_${currentLanguage}`]
  const vat = getVatAmount(total)

  return (
    <Tile marginTop="m-size">
      <SectionHead separator title={t('title')} />

      <LabelledItem
        item={displayMoney(productsPrice)}
        label={t('LABELS.products_price')}
      />

      {deliveryPrice ? (
        <LabelledItem
          item={displayMoney(deliveryPrice)}
          label={t('LABELS.delivery_price')}
          marginTop="m-size"
        />
      ) : null}

      {paymentPrice ? (
        <LabelledItem
          item={displayMoney(paymentPrice)}
          label={t('LABELS.payment_price')}
          marginTop="m-size"
        />
      ) : null}

      {discount ? (
        <LabelledItem
          item={displayMoney(discount, true)}
          label={t('LABELS.discount')}
          marginTop="m-size"
        />
      ) : null}

      <Separator />

      <LabelledItem
        item={displayMoney(total)}
        label={t('LABELS.grand_total')}
      />

      <LabelledItem
        item={displayMoney(vat)}
        label={t('LABELS.vat')}
        marginTop="m-size"
      />
    </Tile>
  )
}

export default Billing
