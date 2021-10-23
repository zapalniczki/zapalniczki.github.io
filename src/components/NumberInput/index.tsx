import React from 'react'
import { INPUT_HEIGHT } from 'components'
import styled from 'styled-components'
import getColor from 'styles/getColor'
import { FieldProps, useField } from 'formik'

type Props = FieldProps<number> & {
  max?: number
  min?: number
}

const NumberInput = ({ max, min, ...props }: Props) => {
  const [, , helpers] = useField(props.field.name)

  const isError = Boolean(props.meta.touched && props.meta.error ? true : false)

  return (
    <Container
      {...props.field}
      error={isError}
      max={max}
      min={min}
      onBlur={props.field.onBlur}
      onFocus={() => helpers.setTouched(true)}
      type="number"
    />
  )
}

type ContainerProps = { error?: boolean }
const Container = styled.input<ContainerProps>`
  height: ${INPUT_HEIGHT};
  border: 1px solid red;
  width: 7rem;
  border: 1px solid;
  border-color: ${(props) =>
    props.error ? getColor('red') : getColor('border-color')};
`

export default NumberInput
