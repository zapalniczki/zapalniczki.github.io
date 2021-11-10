import { SectionHead, Tile } from 'components'
import { useTranslation } from 'hooks'
import React from 'react'

const Orders = () => {
  const t = useTranslation('USER').withBase('ORDERS')

  return (
    <Tile>
      <SectionHead separator title={t('title')} />
    </Tile>
  )
}

export default Orders
