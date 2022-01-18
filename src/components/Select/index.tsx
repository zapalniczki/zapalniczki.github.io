import SelectFromLib from 'react-select'
import React from 'react'
import { INPUT_HEIGHT } from '../Input'

export type Props = {
  disabled?: boolean
  onChange: (option: Option | null) => void
  options: Option[]
  placeholder?: string
  value?: Option
}

const Select = ({ disabled, onChange, options, placeholder, value }: Props) => (
  <SelectFromLib
    components={{ IndicatorsContainer: () => null }}
    isDisabled={disabled}
    isSearchable={false}
    onChange={onChange}
    options={sortAndMapOptions(options)}
    placeholder={placeholder}
    styles={{
      menu: (provided) => ({
        ...provided,
        zIndex: 10,
        marginTop: '0.2rem',
        borderRadius: 0
      }),

      menuList: (provided) => ({
        ...provided,
        padding: 0
      }),

      control: (provided) => ({
        ...provided,
        minHeight: INPUT_HEIGHT,
        borderRadius: 0
      }),

      valueContainer: (provided) => ({
        ...provided,
        padding: '0 1rem'
      }),

      singleValue: (provided) => ({
        ...provided,
        margin: 0,
        color: 'unset',
        fontSize: '1.4rem'
      })
    }}
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
