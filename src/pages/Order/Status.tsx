import React, { useContext } from 'react'
import {
  Tile,
  Text,
  SectionHead,
  Flexbox,
  OrderStatusIndicator
} from 'components'
import { useTranslation } from 'hooks'
import { Order } from 'braty-common'
import { remoteConfigContext } from 'providers'

type Props = {
  status: Order['status']
}

const Status = ({ status }: Props) => {
  const { t: commonT } = useTranslation('COMMON')
  const t = useTranslation('ORDER').withBase('SECTIONS.STATUS')
  const { orderStatus } = useContext(remoteConfigContext)

  if (!orderStatus) {
    return null
  }

  return (
    <Tile>
      <SectionHead separator title={t('title')} />

      <Flexbox alignItems="center">
        <OrderStatusIndicator status={status} />

        <Text marginLeft="m-size" type="caption">
          {commonT(`STATUS_MEANINGS.${status}`)}
        </Text>
      </Flexbox>
    </Tile>
  )
}

export default Status
