import { Text } from 'components'
import { useTranslation } from 'hooks'
import { displayMoney } from 'utils'
import React from 'react'

type Props = {
  amount: number
  bold?: true
  label: string
  negative?: true
}

const TotalRow = ({ amount, bold, label, negative }: Props) => {
  const commonT = useTranslation('COMMON').withBase('CHECKOUT_TOTAL')

  if (!amount) {
    return null
  }

  return (
    <tr>
      <td>
        <Text type="caption">{commonT(label)}</Text>
      </td>

      <td>
        <Text
          fontWeight={bold ? 'bold' : 'undefined'}
          marginLeft="auto"
          textAlign="right"
          type="body-2"
        >
          {displayMoney(amount, negative)}
        </Text>
      </td>
    </tr>
  )
}

export default TotalRow
