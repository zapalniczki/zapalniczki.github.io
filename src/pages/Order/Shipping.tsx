/* eslint-disable react/jsx-newline */
import {
  SectionHead,
  Tile,
  Text,
  LabelledItem,
  Flexbox,
  Button
} from 'components'
import { useTranslation } from 'hooks'
import { GetOrderResponse } from 'models'
import { remoteConfigContext } from 'providers'
import React, { useContext } from 'react'
import { getLanguageLabel } from 'utils'

type Props = {
  deliveryType: GetOrderResponse['delivery_type']
  parcel: GetOrderResponse['parcel']
  shipping: GetOrderResponse['shipping']
}

const Shipping = ({ deliveryType, parcel, shipping }: Props) => {
  const t = useTranslation('ORDER').withBase('SECTIONS.SHIPPING')
  const { language, t: commonT } = useTranslation('COMMON')
  const { orderShipping } = useContext(remoteConfigContext)

  if (!orderShipping) {
    return null
  }

  const label = getLanguageLabel({
    language,
    label: deliveryType
  })

  const hasLink = !!parcel?.link

  return (
    <Tile>
      <SectionHead separator title={t('title')} />

      <Flexbox flexDirection="column" gap="m-size">
        {hasLink && (
          <Button
            label={t('LABELS.follow_parcel')}
            onClick={() => window.open(parcel?.link, '_blank')}
            size="small"
            width="max-content"
          />
        )}

        <LabelledItem item={parcel?.ref} label={t('LABELS.parcel_id')} />

        <LabelledItem item={label} label={t('LABELS.delivery_type')} />

        {shipping && (
          <>
            <LabelledItem
              item={shipping.street_address}
              label={t('LABELS.shipping_address')}
            />

            <Flexbox flexDirection="column">
              <Text fontWeight="bold" type="body-1">
                {shipping.post_code}, {shipping.city}
              </Text>

              <Text fontWeight="bold" type="body-1">
                {commonT(`COUNTRIES.${shipping.country}`)}
              </Text>
            </Flexbox>
          </>
        )}
      </Flexbox>
    </Tile>
  )
}

export default Shipping
