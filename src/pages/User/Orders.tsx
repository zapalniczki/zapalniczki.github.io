import { Order, ROUTES } from 'braty-common'
import {
  SectionHead,
  Tile,
  Text,
  Flexbox,
  OrderStatusIndicator,
  Link,
  DisplayDate
} from 'components'
import { useTranslation } from 'hooks'
import React from 'react'
import { generatePath } from 'react-router-dom'

type Props = {
  orders: Order[]
}

const Orders = ({ orders }: Props) => {
  const t = useTranslation('USER').withBase('RECENT_ORDERS')

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

export default Orders
