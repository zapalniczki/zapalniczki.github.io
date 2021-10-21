import { Flexbox, InputLabel } from 'components'
import { FieldProps, useField } from 'formik'
import React from 'react'
import PhoneInput from 'react-phone-input-2'
import styled from 'styled-components'

type Props = {
  autocomplete?: string
  disabled?: boolean
  fieldProps: FieldProps<string>
  label: string
  placeholder?: string
}

const MobileInput = ({ disabled, fieldProps, label, placeholder }: Props) => {
  const { field, meta } = fieldProps
  const [, , helpers] = useField(fieldProps.field.name)
  const { error, touched } = meta
  const { setValue } = helpers

  return (
    <Flexbox flexDirection="column">
      {error ? (
        <InputLabel error>{error}</InputLabel>
      ) : (
        <InputLabel htmlFor={field.name}>{label}</InputLabel>
      )}

      <StyledPhoneInput
        autocompleteSearch
        country="pl"
        countryCodeEditable={false}
        disableDropdown
        disabled={disabled}
        inputClass="input-form d-block"
        isError={!!touched && !!error}
        masks={{ pl: '... .. .. ..' }}
        onChange={(value) => setValue(value)}
        placeholder={placeholder}
        value={field.value ?? ''}
      />
    </Flexbox>
  )
}

type StyledPhoneInputProps = {
  isError?: boolean
}

const StyledPhoneInput = styled(PhoneInput)<StyledPhoneInputProps>`
  border: ${(props) => (props.isError ? '1px solid red' : '1px solid blue')};
  width: 100%;
`

export default MobileInput
