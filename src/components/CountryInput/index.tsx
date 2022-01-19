import Select from '../Select'
import React from 'react'
import { Props as SelectProps } from '../Select'
import { TranslateFunc, useTranslation } from 'hooks'
import { Country } from 'braty-common'

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

const getOptions = (
  commonT: TranslateFunc
): { label: string; value: Country }[] =>
  [
    {
      label: commonT('pl'),
      value: 'POLAND' as const
    },
    {
      label: commonT('gb'),
      value: 'UNITED KINGDOM' as const
    },
    {
      label: commonT('de'),
      value: 'GERMANY' as const
    }
  ].sort((prev, next) => (prev.label > next.label ? 1 : -1))

export default CountryInput
