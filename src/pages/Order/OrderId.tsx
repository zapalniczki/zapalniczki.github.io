import { Text, Heading, Tile } from 'components'
import { useTranslation } from 'hooks'
import { Order } from 'models'
import React from 'react'

type Props = {
  id: Order['id']
}

const OrderId = ({ id }: Props) => {
  const t = useTranslation('ORDER').withBase('SECTIONS.ORDER_ID')

  return (
    <Tile>
      <Heading level={4}>{id}</Heading>

      <Text type="caption">{t('label')}</Text>
    </Tile>
  )
}

export default OrderId
