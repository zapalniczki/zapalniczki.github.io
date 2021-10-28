import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Text, Box } from 'components'
import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { SpaceProps, space } from 'styled-system'
import getColor from 'styles/getColor'

type Props = {
  children?: ReactNode
  disabled?: boolean
  icon?: IconName
  label?: string
  onClick?: () => void
  size?: Size
  title?: string
  type?: 'button' | 'submit' | 'reset'
  variant?: Variant
} & SpaceProps

const Button = ({
  children,
  icon,
  label,
  size = 'large',
  type = 'button',
  variant = 'primary',
  ...props
}: Props) => (
  <Container {...props} size={size} type={type} variant={variant}>
    {label && (
      <Text type="button" white={variant === 'primary'} wrap={false}>
        {label}
      </Text>
    )}

    {icon && (
      <Box marginLeft={label ? 'm-size' : 0}>
        <FontAwesomeIcon icon={icon} />
      </Box>
    )}

    {children}
  </Container>
)

type ContainerProps = SpaceProps & {
  size: Size
  variant: Variant
}

const Container = styled.button<ContainerProps>`
  background: ${getColor('button-color')};
  padding: ${(props) => props.theme.space['m-size']};
  border: 1px solid;
  border-color: ${getColor('button-color')};
  color: ${getColor('white')};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: ${getColor('button-hover')};
    border: 1px solid;
    border-color: ${getColor('button-hover')};
  }

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background: transparent;
      border: 1px solid;
      border-color: ${getColor('button-color')};
      color: ${getColor('button-color')};

      &:hover {
        background: ${getColor('border-color')};
        border: 1px solid;
        border-color: ${getColor('button-color')};
      }
    `}

  ${(props) =>
    props.variant === 'ternary' &&
    css`
      background: transparent;
      border: 1px solid;
      border-color: ${getColor('border-color')};
      color: ${getColor('paragraph-color')};

      &:hover {
        border: 1px solid;
        border-color: ${getColor('border-color')};
        background: ${getColor('border-color')};
      }
    `}

    ${(props) =>
    props.variant === 'quaternary' &&
    css`
      background: transparent;
      border-color: transparent;
      color: ${getColor('paragraph-color')};

      &:hover {
        background: transparent;
        border-color: transparent;
      }
    `}


    ${(props) =>
    props.size === 'medium' &&
    css`
      font-size: ${(props) => props.theme.fontSizes['font-small']};
      padding: ${(props) =>
        `${props.theme.space['xs-size']} ${props.theme.space['m-size']}`};
      width: max-content;
    `}

    ${(props) =>
    props.size === 'small' &&
    css`
      height: 3.5rem;
      padding: ${(props) => `0 ${props.theme.space['m-size']}`};
      width: max-content;
    `}

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;

      &:hover {
        cursor: not-allowed;
      }
    `}

  ${space}
`

type Size = 'large' | 'medium' | 'small'
type Variant = 'primary' | 'secondary' | 'ternary' | 'quaternary'

export default Button
