import { StyledInput, Text } from 'components'
import { FieldProps, FieldInputProps } from 'formik'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { getColor } from 'styles'
import CheckboxFieldLoader from './index.loader'
import { Flexbox } from '@zapalniczki/shared-components'

type Props = FieldInputProps<string> & {
  caption?: ReactNode
  selectedValue: FieldProps['field']['value']
  subtitle?: string
  title: string
  value: FieldProps['field']['value']
}

const CheckboxField = ({
  caption,
  name,
  onBlur,
  onChange,
  selectedValue,
  subtitle,
  title,
  value
}: Props) => (
  <Container
    alignItems="center"
    backgroundColor="gray-light"
    border="1px solid"
    borderColor="gray-medium"
    position="relative"
  >
    <StyledInput
      checked={value === selectedValue}
      id={value}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      type="radio"
      value={value}
    />

    <Flexbox as="label" htmlFor={value} padding="m-size" width="100%">
      <Text marginLeft="m-size" type="body-2">
        {title}
      </Text>

      {subtitle && (
        <Text marginLeft="m-size" type="caption">
          {subtitle}
        </Text>
      )}

      {caption && (
        <Text marginLeft="auto" type="body-1">
          {caption}
        </Text>
      )}
    </Flexbox>
  </Container>
)

const Container = styled(Flexbox)`
  &:hover {
    border-color: ${getColor('gray-dark')};
  }
`

export { CheckboxFieldLoader }
export default CheckboxField
