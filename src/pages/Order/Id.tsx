import { Text, Heading, Tile } from 'components'
import { useTranslation } from 'hooks'
import { Order } from 'braty-common'
import React, { useContext } from 'react'
import { remoteConfigContext } from 'providers'

type Props = {
  id: Order['id']
}

const Id = ({ id }: Props) => {
  const t = useTranslation('ORDER').withBase('SECTIONS.ID')
  const { orderId } = useContext(remoteConfigContext)

  if (!orderId) {
    return null
  }

  return (
    <Tile>
      <Heading level={4}>{id}</Heading>

      <Text type="caption">{t('label')}</Text>
    </Tile>
  )
}

export default Id
