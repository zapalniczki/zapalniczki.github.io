import SelectFromLib from 'react-select'
import React from 'react'
import { INPUT_HEIGHT } from '../Input'
import { useTheme } from 'styled-components'

export type Props = {
  disabled?: boolean
  onChange: (option: Option | null) => void
  options: Option[]
  placeholder?: string
  value?: Option
}

const Select = ({ disabled, onChange, options, placeholder, value }: Props) => {
  const { colors, radii } = useTheme()

  return (
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
          marginTop: '0.4rem',
          borderRadius: radii['tiny']
        }),

        menuList: (provided) => ({
          ...provided,
          paddingTop: '0.4rem',
          paddingBottom: '0.4rem'
        }),

        control: (provided, state) => ({
          ...provided,
          minHeight: INPUT_HEIGHT,
          borderRadius: radii['tiny'],
          borderColor: colors['gray-medium'],
          boxShadow: 'none',
          outline: state.isFocused ? '2px solid' : 'none',
          outlineColor: state.isFocused ? colors['yellow-outline'] : 'none',

          '&:hover': {
            borderColor: colors['gray-dark']
          }
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
      theme={(provided) => ({
        ...provided,
        colors: {
          ...provided.colors,
          primary25: colors['gray-medium'],
          primary: colors['braty-red']
        }
      })}
      value={value}
    />
  )
}

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
