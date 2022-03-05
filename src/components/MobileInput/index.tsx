import { InputLabel } from 'components'
import { Flexbox } from '@zapalniczki/shared-components'

import { FieldProps, useField } from 'formik'
import { useTranslation } from 'hooks'
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
  const commonT = useTranslation('COMMON').withBase('COUNTRIES')
  const { language } = useTranslation('COMMON')
  const { colors, radii } = useTheme()

  const { field, meta } = fieldProps
  const [, , helpers] = useField(fieldProps.field.name)
  const { error, touched } = meta
  const { setValue } = helpers

  let country = 'pl'
  if (language !== 'pl') {
    country = 'gb'
  }

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
          borderColor: colors['gray-medium'],
          cursor: 'default',
          background: colors['white']
        }}
        country={country}
        countryCodeEditable={false}
        disabled={disabled}
        inputClass="input-form d-block"
        inputProps={{
          autoComplete: 'tel'
        }}
        inputStyle={{
          width: '100%',
          border: '1px solid',
          borderColor: colors['gray-medium'],
          borderRadius: radii['tiny']
        }}
        localization={{
          pl: commonT('POLAND'),
          de: commonT('GERMANY'),
          gb: commonT('UNITED KINGDOM')
        }}
        masks={{
          pl: '... .. .. ..'
        }}
        onBlur={field.onBlur}
        onChange={(value) => setValue(value)}
        onFocus={() => helpers.setTouched(true)}
        onlyCountries={['pl', 'de', 'gb']}
        placeholder={placeholder}
        value={field.value ?? ''}
      />
    </Flexbox>
  )
}

export default MobileInput
