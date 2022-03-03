import {
  DisplayMoney,
  LabelledItem,
  SectionHead,
  Separator,
  Text,
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
    <Tile>
      <SectionHead separator title={t('title')} />

      <LabelledItem
        horizontal
        item={<DisplayMoney>{productsPrice}</DisplayMoney>}
        label={t('LABELS.products_price')}
      />

      {deliveryPrice ? (
        <LabelledItem
          horizontal
          item={<DisplayMoney>{deliveryPrice}</DisplayMoney>}
          label={t('LABELS.delivery_price')}
        />
      ) : null}

      {paymentPrice ? (
        <LabelledItem
          horizontal
          item={<DisplayMoney>{paymentPrice}</DisplayMoney>}
          label={t('LABELS.payment_price')}
        />
      ) : null}

      {discount ? (
        <LabelledItem
          horizontal
          item={<DisplayMoney negative>{discount}</DisplayMoney>}
          label={t('LABELS.discount')}
        />
      ) : null}

      <Separator />

      <LabelledItem
        green
        horizontal
        item={<DisplayMoney>{total}</DisplayMoney>}
        label={t('LABELS.grand_total')}
      />

      <LabelledItem horizontal label={t('LABELS.vat')} labelTextType="caption">
        <Text type="caption">
          <DisplayMoney>{vat}</DisplayMoney>
        </Text>
      </LabelledItem>
    </Tile>
  )
}

export default Billing
