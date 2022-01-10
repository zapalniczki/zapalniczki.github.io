import Select from 'react-select/src/Select'
import React from 'react'

const CountryInput = () => {
  const onChange = (value: Value) => {
    console.log(value)
  }
  const value = { label: 'string', value: 'string' }

  return (
    <Select
      components={{}}
      onChange={onChange}
      options={countries}
      value={value}
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
