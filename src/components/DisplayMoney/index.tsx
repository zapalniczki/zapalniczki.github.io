import { useTranslation } from 'hooks'
import React from 'react'

import { displayMoney } from 'utils'

type Props = {
  children: number
  negative?: boolean
}

const Money = ({ children, negative }: Props) => {
  const { currentLanguage } = useTranslation('COMMON')
  const formattedMoney = displayMoney(children, negative, currentLanguage)

  return <>{formattedMoney}</>
}

export default Money
