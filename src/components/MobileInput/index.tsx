import { Flexbox, InputLabel } from 'components'
import { FieldProps, useField } from 'formik'
import { FormValues } from 'pages/checkout/CheckoutDetails/useForm'
import React from 'react'
import PhoneInput from 'react-phone-input-2'
import styled from 'styled-components'

type Props = {
  disabled?: boolean
  placeholder?: string
  label: string
  fieldProps: FieldProps<string, FormValues>
}

const MobileInput = ({ fieldProps, placeholder, label, disabled }: Props) => {
  const { meta, field } = fieldProps
  const [, , helpers] = useField(fieldProps.field.name)
  const { touched, error } = meta
  const { setValue } = helpers

  return (
    <Flexbox flexDirection="column">
      {error ? (
        <InputLabel error>{error}</InputLabel>
      ) : (
        <InputLabel htmlFor={field.name}>{label}</InputLabel>
      )}

      <StyledPhoneInput
        isError={!!touched && !!error}
        disabled={disabled}
        country="pl"
        inputClass="input-form d-block"
        placeholder={placeholder}
        disableDropdown
        countryCodeEditable={false}
        masks={{ pl: '... .. .. ..' }}
        onChange={(value) => setValue(value)}
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
