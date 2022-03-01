import { Order } from 'braty-common'
import { SectionHead, Tile, Text } from 'components'
import { useTranslation } from 'hooks'
import React from 'react'

type Props = {
  orders: Order[]
}

const Orders = ({ orders }: Props) => {
  const t = useTranslation('USER').withBase('ORDERS')

  const isEmpty = !orders.length

  return (
    <Tile>
      <SectionHead separator title={t('title')} />

      {isEmpty && <Text type="body-2">{t('emptyState')}</Text>}
    </Tile>
  )
}

export default Orders
