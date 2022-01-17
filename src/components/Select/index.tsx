import SelectFromLib from 'react-select'
import React from 'react'
// import { CSSObject } from 'styled-components'

type Props = {
  onChange: (option: Option | null) => void
  options: Option[]
  placeholder?: string
  value?: Option
}

const Select = ({ onChange, options, placeholder, value }: Props) => (
  <SelectFromLib
    onChange={onChange}
    options={sortAndMapOptions(options)}
    placeholder={placeholder}
    styles={
      {
        // menu: (provided: CSSObject) => ({
        //   ...provided,
        //   zIndex: 10
        // })
      }
    }
    value={value}
  />
)

const sortAndMapOptions = (options?: Option[]) =>
  options
    ?.sort((a, b) => (a < b ? -1 : 1))
    .map((option) => ({
      label: option.label,
      value: option.value
    }))

type Option = {
  label: string
  value: string
}

export default Select
