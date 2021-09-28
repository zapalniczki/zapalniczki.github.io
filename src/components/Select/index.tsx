import SelectFromLib from 'react-select'
import React from 'react'

type Props = {
  placeholder?: string
  onChange: (option: Option | null) => void
  options: Option[]
  value?: Option
}

const Select = ({ placeholder, onChange, options, value }: Props) => (
  <SelectFromLib
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    options={sortAndMapOptions(options)}
    styles={{
      menu: (provided: any) => ({
        ...provided,
        zIndex: 10
      })
    }}
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
