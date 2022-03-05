import Heading from '../Heading'
import Flexbox from '../Flexbox'
import { useBreakpoints } from 'hooks'
import React, { ReactNode } from 'react'
import { OrderProps, SpaceProps } from 'styled-system'
import { Color } from 'styles'
import Loader from './index.loader'

export type Props = {
  background?: ReactNode
  backgroundColor?: Color
  children?: ReactNode
  size?: Size
  subtitle?: string
  title?: string
  vhOnMobile?: boolean
} & SpaceProps &
  OrderProps

const Banner = ({
  background,
  backgroundColor,
  children,
  size,
  subtitle,
  title,
  vhOnMobile,
  ...props
}: Props) => {
  const isDesktop = useBreakpoints('desktop')
  const isMax = useBreakpoints('max')

  let height = sizeToHeight['SMALL']
  if (size) {
    height = sizeToHeight[size]
  }
  if (vhOnMobile && !isDesktop && !isMax) {
    height = `calc(100vh - 14rem)`
  }

  return (
    <Flexbox
      {...props}
      backgroundColor={backgroundColor ?? 'gray-light'}
      borderRadius="medium"
      flexDirection="column"
      justifyContent="center"
      minHeight={height}
      paddingX={['unset', 'xs-size', 'xs-size', 'l-size']}
      paddingY="l-size"
      position="relative"
    >
      {title && <Heading level={3}>{title}</Heading>}

      {subtitle && <Heading level={5}>{subtitle}</Heading>}

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
}

const sizeToHeight: Record<Size, string> = {
  SMALL: '20rem',
  MEDIUM: '30rem',
  LARGE: '40rem'
}

export type Size = 'SMALL' | 'MEDIUM' | 'LARGE'

export { Loader as BannerLoader }
export default Banner
