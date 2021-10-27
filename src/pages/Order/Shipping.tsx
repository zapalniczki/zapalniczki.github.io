import { SectionHead, Tile, Text } from 'components'
import { useTranslation } from 'hooks'
import { GetOrderResponse } from 'models'
import React from 'react'

type Props = {
  shipping: GetOrderResponse['shipping']
}

const Shipping = ({ shipping }: Props) => {
  const t = useTranslation('ORDER').withBase('SECTIONS.SHIPPING')

  if (!shipping) {
    return null
  }

  return (
    <Tile marginBottom="2rem">
      <SectionHead separator title={t('title')} />

      <Text marginTop="m-size" type="body-1">
        {shipping.street_address}
      </Text>

      <Text type="body-1">
        {/* eslint-disable-next-line react/jsx-newline */}
        {shipping.post_code}, {shipping.city}
      </Text>
    </Tile>
  )
}

export default Shipping
