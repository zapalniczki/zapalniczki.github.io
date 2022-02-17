import { useTranslation } from 'hooks'
import React from 'react'

import { displayMoney } from 'utils'

type Props = {
  children: number
  negative?: boolean
}

const Money = ({ children, negative }: Props) => {
  const { language } = useTranslation('COMMON')
  const formattedMoney = displayMoney(children, negative, language)

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{formattedMoney}</>
}

export default Money
