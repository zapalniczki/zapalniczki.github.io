import { Flexbox, Heading } from 'components'
import React, { ReactNode } from 'react'
import { SpaceProps } from 'styled-system'
import { Color } from 'styles/theme'

export type Props = {
  background?: ReactNode
  backgroundColor?: Color
  // description?: string
  children?: ReactNode
  size?: Size
  title?: string
} & SpaceProps

const Banner = ({
  background,
  backgroundColor,
  children,
  size,
  title,
  ...props
}: Props) => (
  <Flexbox
    {...props}
    backgroundColor={backgroundColor ?? 'background-color-01'}
    flexDirection="column"
    justifyContent="center"
    minHeight={size ? sizeToHeight[size] : sizeToHeight['SMALL']}
    paddingX={['unset', 'xs-size', 'xs-size', 'l-size']}
    paddingY="l-size"
    position="relative"
  >
    {title && <Heading level={4}>{title}</Heading>}

    {children}

    {background && (
      <Flexbox
        alignItems="flex-end"
        height="100%"
        left="0"
        position="absolute"
        top="0"
        width="100%"
        zIndex={0}
      >
        {background}
      </Flexbox>
    )}
  </Flexbox>
)

const sizeToHeight: Record<Size, string> = {
  SMALL: '20rem',
  MEDIUM: '30rem',
  LARGE: '40rem'
}

type Size = 'SMALL' | 'MEDIUM' | 'LARGE'

export default Banner
