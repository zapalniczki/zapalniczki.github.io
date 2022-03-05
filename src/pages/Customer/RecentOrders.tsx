import { Order, ROUTES } from 'braty-common'
import {
  SectionHead,
  Tile,
  Text,
  OrderStatusIndicator,
  Link,
  DisplayDate
} from 'components'
import { Flexbox } from '@zapalniczki/shared-components'

import { useTranslation } from 'hooks'
import { remoteConfigContext } from 'providers'
import React, { useContext } from 'react'
import { generatePath } from 'react-router-dom'

type Props = {
  orders: Order[]
}

const RecentOrders = ({ orders }: Props) => {
  const t = useTranslation('CUSTOMER').withBase('RECENT_ORDERS')
  const { customerRecentOrders } = useContext(remoteConfigContext)

  if (!customerRecentOrders) {
    return null
  }

  const isEmpty = !orders.length

  return (
    <Tile>
      <SectionHead separator title={t('title')} />

      {isEmpty ? (
        <Text type="body-2">{t('emptyState')}</Text>
      ) : (
        <Flexbox flexDirection="column" gap="m-size">
          {orders.map((order) => {
            const orderPath = generatePath(ROUTES.ORDERS_ID, { id: order.id })

            return (
              <Flexbox alignItems="center" gap="m-size" key={order.id}>
                <Text type="caption">
                  <DisplayDate displayDiff={false}>
                    {order.created_at}
                  </DisplayDate>
                </Text>

                <Link label={order.id} showUnderline to={orderPath} />

                <OrderStatusIndicator status={order.status} />
              </Flexbox>
            )
          })}
        </Flexbox>
      )}
    </Tile>
  )
}

export default RecentOrders
