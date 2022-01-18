import Select from '../Select'
import React from 'react'
import { Props as SelectProps } from '../Select'
import { TranslateFunc, useTranslation } from 'hooks'

type Props = Omit<SelectProps, 'options' | 'value'> & {
  value: string
}

const CountryInput = ({ value, ...props }: Props) => {
  const commonT = useTranslation('COMMON').withBase('COUNTRIES')
  const options = getOptions(commonT)

  const selectedValue = options.find((option) => option.value === value)

  return (
    <Select
      // disabled
      options={options}
      value={selectedValue}
      {...props}
    />
  )
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
