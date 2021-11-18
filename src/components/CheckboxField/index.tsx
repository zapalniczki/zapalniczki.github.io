import { StyledInput, Text, Flexbox, InputLabel } from 'components'
import { FieldProps } from 'formik'
import React from 'react'
import CheckboxFieldLoader from './index.loader'

type Props = FieldProps & {
  id: string
  isFirst: boolean
  label: string
  subtitle?: string
  title: string
  val?: string
}

const CheckboxField = ({
  field: { name, onBlur, onChange, value },
  id,
  isFirst,
  label,
  meta: { error, touched },
  subtitle,
  title,
  val
}: Props) => (
  <>
    {isFirst && (
      <Flexbox justifyContent="flex-start" marginBottom="0" marginRight="auto">
        {touched && error ? (
          <InputLabel error>{error}</InputLabel>
        ) : (
          <InputLabel htmlFor={name}>{label}</InputLabel>
        )}
      </Flexbox>
    )}

    <Flexbox
      alignItems="center"
      backgroundColor="background-color-01"
      marginTop={isFirst ? 'unset' : 'm-size'}
      position="relative"
    >
      <StyledInput
        checked={id === value}
        id={id}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        type="radio"
        value={id}
      />

      <Flexbox as="label" htmlFor={id} padding="m-size" width="100%">
        <Text type="body-2">{title}</Text>

        {subtitle && (
          <Text marginLeft="s-size" type="caption">
            {subtitle}
          </Text>
        )}

        {val && (
          <Text marginLeft="auto" type="body-1">
            {val}
          </Text>
        )}
      </Flexbox>
    </Flexbox>
  </>
)

export { CheckboxFieldLoader }
export default CheckboxField
