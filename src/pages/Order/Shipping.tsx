import { SectionHead, Tile, Text, LabelledItem } from 'components'
import { useTranslation } from 'hooks'
import { GetOrderResponse } from 'models'
import React from 'react'
import { getLanguageLabel } from 'utils'

type Props = {
  deliveryType: GetOrderResponse['delivery_type']
  shipping: GetOrderResponse['shipping']
}

const Shipping = ({ deliveryType, shipping }: Props) => {
  const t = useTranslation('ORDER').withBase('SECTIONS.SHIPPING')
  const { currentLanguage } = useTranslation('COMMON')

  const label = getLanguageLabel({
    language: currentLanguage,
    label: deliveryType
  })

  return (
    <Tile marginBottom="m-size">
      <SectionHead separator title={t('title')} />

      <LabelledItem item={label} label={t('LABELS.delivery_type')} />

      {shipping && (
        <>
          <LabelledItem
            item={shipping.street_address}
            label={t('LABELS.shipping_address')}
            marginTop="m-size"
          />

          <Text fontWeight="bold" type="body-1">
            {/* eslint-disable-next-line react/jsx-newline */}
            {shipping.post_code}, {shipping.city}
          </Text>
        </>
      )}
    </Tile>
  )
}

export default Shipping
