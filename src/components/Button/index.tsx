import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box } from '@zapalniczki/shared-components'

import { Spinner, Text } from 'components'
import { LayoutProps } from 'framer-motion'
import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import {
  borderRadius,
  BorderRadiusProps,
  layout,
  space,
  SpaceProps,
  width,
  WidthProps
} from 'styled-system'
import { getColor, getShadow, getSpace } from 'styles'

type Props = {
  children?: ReactNode
  disabled?: boolean
  icon?: IconName
  label?: string
  loading?: boolean
  mobileFullWidth?: boolean
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
  mobileFullWidth = true,
  size = 'large',
  type = 'button',
  variant = 'primary',
  ...props
}: Props) => {
  if (loading) {
    return (
      <Container
        {...props}
        borderRadius="tiny"
        paddingLeft="l-size"
        paddingRight="l-size"
        size={size}
        type={type}
        variant={variant}
      >
        <Spinner size="SMALL" />
      </Container>
    )
  }

  return (
    <Container
      borderRadius="tiny"
      mobileFullWidth={mobileFullWidth}
      width={[0, '100%', 'unset']}
      {...props}
      size={size}
      type={type}
      variant={variant}
    >
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

type ContainerProps = {
  mobileFullWidth?: boolean
  size: Size
  variant: Variant
} & SpaceProps &
  LayoutProps &
  BorderRadiusProps

const Container = styled.button<ContainerProps>`
  background: ${getColor('dark-color')};
  padding: ${getSpace('s-size')} ${getSpace('l-size')};
  border: 1px solid;
  border-color: ${getColor('dark-color')};
  color: ${getColor('white')};
  position: relative;
  max-width: ${(props) => (props.mobileFullWidth ? '100%' : 'max-content')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  box-shadow: ${getShadow('button')};

  &:hover {
    color: ${getColor('paragraph-color')};
    background: ${getColor('white')};
    border-color: ${getColor('dark-color')};
  }

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background: transparent;
      border-color: ${getColor('dark-color')};
      color: ${getColor('dark-color')};

      &:hover {
        color: ${getColor('white')};
        background: ${getColor('dark-color')};
        border-color: ${getColor('dark-color')};
      }
    `}

  ${(props) =>
    props.variant === 'ternary' &&
    css`
      background: transparent;
      border-color: ${getColor('gray-medium')};
      color: ${getColor('paragraph-color')};
      box-shadow: none;

      &:hover {
        border-color: ${getColor('gray-dark')};
        background: transparent;
      }
    `}

    ${(props) =>
    props.variant === 'quaternary' &&
    css`
      background: transparent;
      border-color: transparent;
      color: ${getColor('paragraph-color')};
      box-shadow: none;

      &:hover {
        background: ${getColor('gray-light')};
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
  ${layout}
  ${borderRadius}
`

type Size = 'large' | 'medium' | 'small'
type Variant = 'primary' | 'secondary' | 'ternary' | 'quaternary'

export default Button
