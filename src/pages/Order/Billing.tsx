import { LabelledItem, SectionHead, Separator, Tile } from 'components'
import { useTranslation } from 'hooks'
import { GetOrderResponse } from 'models'
import React from 'react'
import { displayMoney, getVatAmount } from 'utils'

type Props = Pick<
  GetOrderResponse,
  'products_price' | 'delivery_price' | 'discount' | 'total'
>

const Billing = ({
  delivery_price,
  discount,
  products_price,
  total
}: Props) => {
  const t = useTranslation('ORDER').withBase('SECTIONS.BILLING')

  const vat = getVatAmount(total)

  return (
    <Tile marginTop="m-size">
      <SectionHead separator title={t('title')} />

      <LabelledItem
        item={displayMoney(products_price)}
        label={t('LABELS.products_price')}
      />

      {delivery_price ? (
        <LabelledItem
          item={displayMoney(delivery_price)}
          label={t('LABELS.delivery_price')}
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
