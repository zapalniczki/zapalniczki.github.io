import { LabelledItem, SectionHead, Separator, Tile } from 'components'
import { useTranslation } from 'hooks'
import { GetOrderResponse } from 'models'
import React from 'react'
import { displayMoney } from 'utils'

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

  return (
    <Tile marginTop="m-size">
      <SectionHead separator title={t('title')} />

      <LabelledItem
        item={displayMoney(products_price)}
        label={t('LABELS.products_price')}
      />

      <LabelledItem
        item={displayMoney(delivery_price)}
        label={t('LABELS.delivery_price')}
        marginTop="m-size"
      />

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
    </Tile>
  )
}

export default Billing
