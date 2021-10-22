import { InputLabel, Flexbox } from 'components'
import { FieldProps } from 'formik'
import React from 'react'
import styled from 'styled-components'
import { SpaceProps } from 'styled-system'
import getColor from 'styles/getColor'

type Props = FieldProps<string> & {
  autocomplete?: string
  disabled?: boolean
  label?: string
  maxLength?: number
  placeholder?: string
  textarea?: boolean
  type?: 'text' | 'password' | 'email'
} & SpaceProps

const Input = ({
  autocomplete,
  disabled,
  field,
  label,
  maxLength,
  meta,
  placeholder,
  textarea,
  type = 'text',
  ...props
}: Props) => {
  const touched = meta?.touched
  const { error } = meta

  return (
    <Flexbox {...props} flexDirection="column">
      {touched && error ? (
        <InputLabel error>{error}</InputLabel>
      ) : (
        label && <InputLabel htmlFor={field.name}>{label}</InputLabel>
      )}

      <StyledInput
        {...field}
        as={textarea ? 'textarea' : 'input'}
        autoComplete={autocomplete}
        disabled={disabled}
        id={field.name}
        maxLength={maxLength}
        placeholder={placeholder}
        textarea={textarea}
        type={type}
      />
    </Flexbox>
  )
}

const INPUT_HEIGHT = '3.5rem'

type StyledInputProps = Pick<Props, 'textarea'>
export const StyledInput = styled.input<StyledInputProps>`
  height: ${(props) =>
    props.textarea ? `calc(3 * ${INPUT_HEIGHT})` : INPUT_HEIGHT};
  position: relative;
  cursor: pointer;
  border: 1px solid;
  border-color: ${getColor('border-color')};
  padding: ${(props) =>
    `${props.theme.space['xs-size']} ${props.theme.space['xs-size']}`};

  &[type='checkbox'],
  &[type='radio'] {
    padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    display: none;
    cursor: pointer;
  }

  &[type='checkbox'] + label:before,
  &[type='radio'] + label:before {
    content: '';
    -webkit-appearance: none;
    background-color: ${getColor('white')};
    border: 2px solid;
    border-color: ${getColor('border-color-focus')};
    padding: 1rem;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin: auto 0.5rem auto 0;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  &[type='checkbox'] + label:after,
  &[type='radio'] + label:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 2.2rem;
    bottom: 0;
    margin: auto;
    width: 3px;
    height: 1rem;
    border: solid;
    border-color: ${getColor('border-color')};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    transition: all 0.3s ease;
  }

  &[type='checkbox']:hover + label:before,
  &[type='radio']:hover + label:before {
    border: 2px solid;
    border-color: ${getColor('border-color-focus')};
  }

  &[type='checkbox']:checked + label:before,
  &[type='radio']:checked + label:before {
    border: 2px solid;
    border-color: ${getColor('black')};
    background: ${getColor('black')};
  }

  &[type='checkbox']:checked + label:after,
  &[type='radio']:checked + label:after {
    border: solid;
    border-color: ${getColor('white')};
    border-width: 0 2px 2px 0;
  }

  * {
    cursor: pointer;
  }
`

export default Input
