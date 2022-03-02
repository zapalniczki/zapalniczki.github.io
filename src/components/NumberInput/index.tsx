import React from 'react'
import { Flexbox, Button, INPUT_HEIGHT } from 'components'
import styled from 'styled-components'
import getColor from 'styles/getColor'
import { FieldProps, useField } from 'formik'
import getSpace from 'styles/getSpace'

type Props = FieldProps<number> & {
  max?: number
  min?: number
}

const NumberInput = ({ max, min, ...props }: Props) => {
  const [, , helpers] = useField(props.field.name)

  const isError = Boolean(props.meta.touched && props.meta.error ? true : false)

  return (
    <Flexbox>
      <StyledButton
        disabled={props.field.value === min}
        icon="minus"
        onClick={() => helpers.setValue(props.field.value - 1)}
        variant="ternary"
      />

      <Container
        {...props.field}
        error={isError}
        max={max}
        min={min}
        onBlur={props.field.onBlur}
        onFocus={() => helpers.setTouched(true)}
        type="number"
      />

      <StyledButton
        disabled={props.field.value === max}
        icon="plus"
        onClick={() => helpers.setValue(props.field.value + 1)}
        reversed
        variant="ternary"
      />
    </Flexbox>
  )
}

type ContainerProps = { error?: boolean }
const Container = styled.input<ContainerProps>`
  height: ${INPUT_HEIGHT};
  width: 7rem;
  padding: ${getSpace('xs-size')};

  border: ${(props) => {
    if (props.error) {
      return `3px solid ${getColor('red')(props)}`
    }

    return `1px solid ${getColor('gray-medium')(props)}`
  }};

  &:hover {
    border: 1px solid ${getColor('gray-dark')};
  }
`

type StyledButtonProps = { reversed?: boolean }
const StyledButton = styled(Button)<StyledButtonProps>`
  border-left: ${(props) => props.reversed && 'none'};
  border-right: ${(props) => !props.reversed && 'none'};

  border-top-left-radius: ${(props) => props.reversed && '0'};
  border-bottom-left-radius: ${(props) => props.reversed && '0'};

  border-top-right-radius: ${(props) => !props.reversed && '0'};
  border-bottom-right-radius: ${(props) => !props.reversed && '0'};

  &:hover {
    border-left: ${(props) => props.reversed && 'none'};
    border-right: ${(props) => !props.reversed && 'none'};
  }
`

export default NumberInput
