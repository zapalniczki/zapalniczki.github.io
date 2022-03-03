import Chip from '../Chip'
import { useTranslation } from 'hooks'
import { Order } from 'braty-common'
import React from 'react'
import { SpaceProps } from 'styled-system'

type Props = {
  status: Order['status']
} & SpaceProps

const OrderStatusIndicator = ({ status, ...props }: Props) => {
  const { t: commonT } = useTranslation('COMMON')

  let variant
  switch (status) {
    case 'AWAITING_FOR_PICKUP':
    case 'PAYMENT_RECEIVED':
    case 'PRODUCTION':
      variant = undefined
      break

    case 'CONFIRMED':
    case 'OPEN':
      variant = 'NEGATIVE' as const
      break

    case 'COMPLETED':
    case 'IN_DELIVERY':
      variant = 'POSITIVE' as const
      break
  }

  return (
    <Chip rounded variant={variant} {...props}>
      {commonT(`ORDER_STATUSES.${status}`)}
    </Chip>
  )
}

export default OrderStatusIndicator
