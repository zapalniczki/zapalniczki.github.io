import { Box, InputLabel } from 'components'
import { Flexbox } from 'components'
import { StyledInput } from 'components/Input'
import { FieldProps } from 'formik'
import React from 'react'
import styled from 'styled-components'

type Props = FieldProps & {
  id: string
  isFirst: boolean
  title: string
  subtitle?: string
  val?: string
  fieldLabel: string
}

const CheckboxField = ({
  id,
  field: { value, onChange, onBlur, name },
  meta: { touched, error },
  isFirst,
  title,
  subtitle,
  val,
  fieldLabel
}: Props) => (
  <>
    {isFirst && (
      <Flexbox marginBottom="0" marginRight="auto" justifyContent="flex-start">
        {touched && error ? (
          <InputLabel error>{error}</InputLabel>
        ) : (
          <InputLabel htmlFor={name}>{fieldLabel}</InputLabel>
        )}
      </Flexbox>
    )}

    <Container
      backgroundColor="background-color-01"
      padding="s-size"
      marginBottom="m-size"
      position="relative"
    >
      <StyledInput
        name={name}
        id={id}
        type="radio"
        value={id}
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
      />

      <Flexbox
        as="label"
        padding="0"
        width="100%"
        htmlFor={id}
        justifyContent="space-between"
      >
        <Flexbox as="h4" marginRight="auto" alignItems="center">
          {title}

          {subtitle && (
            <Box marginLeft="s-size" as="span" fontStyle="italic">
              {subtitle}
            </Box>
          )}
        </Flexbox>

        {val && <h4>{val}</h4>}
      </Flexbox>
    </Container>
  </>
)

const Container = styled(Flexbox)`
  cursor: pointer;
`

export default CheckboxField
