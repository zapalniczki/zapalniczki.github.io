import { Flexbox, InputLabel } from 'components'
import { FieldProps, useField } from 'formik'
import React from 'react'
import PhoneInput from 'react-phone-input-2'
import { useTheme } from 'styled-components'

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

  const { colors } = useTheme()

  return (
    <Flexbox flexDirection="column">
      {touched && error ? (
        <InputLabel error>{error}</InputLabel>
      ) : (
        label && <InputLabel htmlFor={field.name}>{label}</InputLabel>
      )}

      <PhoneInput
        autocompleteSearch
        buttonStyle={{
          border: '1px solid',
          borderColor: colors['border-color'],
          cursor: 'default',
          background: 'background-color'
        }}
        country="pl"
        countryCodeEditable={false}
        disableDropdown
        disabled={disabled}
        inputClass="input-form d-block"
        inputStyle={{
          width: '100%',
          border: '1px solid',
          borderColor: colors['border-color']
        }}
        masks={{ pl: '... .. .. ..' }}
        onBlur={field.onBlur}
        onChange={(value) => setValue(value)}
        onFocus={() => helpers.setTouched(true)}
        placeholder={placeholder}
        value={field.value ?? ''}
      />
    </Flexbox>
  )
}

export default MobileInput
