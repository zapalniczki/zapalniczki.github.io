import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Text, Box } from 'components'
import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { SpaceProps, space } from 'styled-system'
import getColor from 'styles/getColor'

type Props = {
  disabled?: boolean
  onClick?: () => void
  children?: ReactNode
  variant?: Variant
  type?: 'button' | 'submit' | 'reset'
  size?: Size
  icon?: IconName
} & SpaceProps

const Button = ({
  variant = 'primary',
  disabled,
  onClick,
  children,
  type = 'button',
  size = 'large',
  icon,
  ...props
}: Props) => (
  <Container
    {...props}
    disabled={disabled}
    onClick={onClick}
    size={size}
    type={type}
    variant={variant}
  >
    {children && (
      <Text type="button" white={variant === 'primary'} wrap={false}>
        {children}
      </Text>
    )}

    {icon && (
      <Box marginLeft={children ? 'm-size' : 0}>
        <FontAwesomeIcon icon={icon} />
      </Box>
    )}
  </Container>
)

type ContainerProps = SpaceProps & {
  variant: Variant
  size: Size
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

  &:hover {
    cursor: pointer;
    background: ${getColor('button-hover')};
    border: 1px solid;
    border-color: ${getColor('button-hover')};
    text-decoration: none;
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
