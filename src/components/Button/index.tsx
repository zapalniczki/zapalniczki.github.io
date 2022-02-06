import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Text, Box, Spinner } from 'components'
import { LayoutProps } from 'framer-motion'
import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import {
  SpaceProps,
  space,
  WidthProps,
  width,
  layout,
  BorderRadiusProps,
  borderRadius
} from 'styled-system'
import getColor from 'styles/getColor'
import getSpace from 'styles/getSpace'

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
      <Container {...props} size={size} type={type} variant={variant}>
        <Spinner small />
      </Container>
    )
  }

  return (
    <Container
      // TEMP
      borderRadius="tiny"
      // TEMP
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
  padding: ${getSpace('m-size')};
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
  box-shadow: 0 5px 15px 0 rgb(0 0 0 / 15%);

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
      box-shadow: none;

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
      box-shadow: none;

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
  ${layout}
  ${borderRadius}
`

type Size = 'large' | 'medium' | 'small'
type Variant = 'primary' | 'secondary' | 'ternary' | 'quaternary'

export default Button
