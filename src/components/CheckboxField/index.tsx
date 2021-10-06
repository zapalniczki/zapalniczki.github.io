import { Flexbox, Box, InputLabel } from 'components'
import { StyledInput } from 'components/Input'
import { FieldProps } from 'formik'
import React from 'react'
import styled from 'styled-components'

type Props = FieldProps & {
  fieldLabel: string,
  id: string,
  isFirst: boolean,
  subtitle?: string
  title: string,
  val?: string
}

const CheckboxField = ({
  field: { name, onBlur, onChange, value },
  fieldLabel,
  id,
  isFirst,
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
          <InputLabel htmlFor={name}>{fieldLabel}</InputLabel>
        )}
      </Flexbox>
    )}

    <Container
      backgroundColor="background-color-01"
      marginBottom="m-size"
      padding="s-size"
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

      <Flexbox
        as="label"
        htmlFor={id}
        justifyContent="space-between"
        padding="0"
        width="100%"
      >
        <Flexbox alignItems="center" as="h4" marginRight="auto">
          {title}

          {subtitle && (
            <Box as="span" fontStyle="italic" marginLeft="s-size">
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
