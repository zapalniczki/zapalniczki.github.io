/* eslint-disable react/jsx-newline */
import {
  SectionHead,
  Tile,
  Text,
  LabelledItem,
  Button,
  TileBody,
  TileHeading
} from 'components'
import { Flexbox } from '@zapalniczki/shared-components'

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

// TODO name is wrong => Delivery
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
    <Tile padding={[0, 0, 0, 0]}>
      <TileHeading>
        <SectionHead marginBottom={0} title={t('title')} />
      </TileHeading>

      <TileBody gap="m-size">
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
          <LabelledItem label={t('LABELS.shipping_address')}>
            <Flexbox flexDirection="column">
              <Text fontWeight="bold" type="body-1">
                {shipping.street_address}
              </Text>

              <Text fontWeight="bold" type="body-1">
                {shipping.post_code}, {shipping.city}
              </Text>

              <Text fontWeight="bold" type="body-1">
                {commonT(`COUNTRIES.${shipping.country}`)}
              </Text>
            </Flexbox>
          </LabelledItem>
        )}
      </TileBody>
    </Tile>
  )
}

export default Shipping
