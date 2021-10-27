import { Chip } from 'components'
import { useTranslation } from 'hooks'
import { Order } from 'models'
import React from 'react'

type Props = {
  status: Order['status']
}

const StatusIndicator = ({ status }: Props) => {
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

  return <Chip variant={variant}>{commonT(`ORDER_STATUSES.${status}`)}</Chip>
}

export default StatusIndicator
