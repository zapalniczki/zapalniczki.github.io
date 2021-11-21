import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Text, Box, Spinner } from 'components'
import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { SpaceProps, space, WidthProps, width } from 'styled-system'
import getColor from 'styles/getColor'
import getSpace from 'styles/getSpace'

type Props = {
  children?: ReactNode
  disabled?: boolean
  icon?: IconName
  label?: string
  loading?: boolean
  onClick?: () => void
  size?: Size
  title?: string
  type?: 'button' | 'submit' | 'reset'
  variant?: Variant
} & SpaceProps &
  WidthProps

const Button = ({
  children,
  icon,
  label,
  loading,
  size = 'large',
  type = 'button',
  variant = 'primary',
  ...props
}: Props) => {
  if (loading) {
    return (
      <Container {...props} size={size} type={type} variant={variant}>
        <Spinner small />
      </Container>
    )
  }

  return (
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
}

type ContainerProps = SpaceProps & {
  size: Size
  variant: Variant
}

const Container = styled.button<ContainerProps>`
  background: ${getColor('dark-color')};
  padding: ${getSpace('m-size')};
  border: 1px solid;
  border-color: ${getColor('dark-color')};
  color: ${getColor('white')};
  position: relative;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background: transparent;
      border: 1px solid;
      border-color: ${getColor('dark-color')};
      color: ${getColor('dark-color')};

      &:hover {
        background: ${getColor('border-color')};
        border: 1px solid;
        border-color: ${getColor('dark-color')};
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
        `${getSpace('xs-size')(props)} ${getSpace('m-size')(props)}`};
      width: max-content;
    `}

    ${(props) =>
    props.size === 'small' &&
    css`
      height: 3.5rem;
      padding: ${(props) => `0 ${getSpace('m-size')(props)}`};
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
  ${width}
`

type Size = 'large' | 'medium' | 'small'
type Variant = 'primary' | 'secondary' | 'ternary' | 'quaternary'

export default Button
