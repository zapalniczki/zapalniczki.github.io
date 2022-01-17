import Select from 'react-select'
import React from 'react'

const CountryInput = () => {
  const value = { label: 'string', value: 'string' }

  return (
    <Select
      components={{}}
      onChange={() => undefined}
      options={countries}
      value={value as Value}
    />
  )
}

const countries = [
  { label: 'label1', value: 'value1' },
  { label: 'label2', value: 'value2' }
]

type Value = {
  label: string
  value: string
} | null

export default CountryInput
