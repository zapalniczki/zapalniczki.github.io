import Select from '../Select'
import React from 'react'
import { Props as SelectProps } from '../Select'
import { TranslateFunc, useTranslation } from 'hooks'

type Props = Omit<SelectProps, 'options'>

const CountryInput = (props: Props) => {
  const commonT = useTranslation('COMMON').withBase('COUNTRIES')

  return <Select disabled options={getOptions(commonT)} {...props} />
}

const getOptions = (commonT: TranslateFunc) => [
  {
    label: commonT('pl'),
    value: 'Poland'
  },
  {
    label: commonT('gb'),
    value: 'United Kingdom'
  },
  {
    label: commonT('de'),
    value: 'Germany'
  }
]

export default CountryInput
