import { Banner, Flexbox, Heading, Image, Size } from 'components'
import React, { ReactNode } from 'react'
import { OrderProps, SpaceProps } from 'styled-system'

type Props = {
  children?: ReactNode
  size?: Size
  src: string
  title: string
} & OrderProps &
  SpaceProps

const BannerWithImage = ({ children, size, src, title, ...props }: Props) => (
  <Banner size={size} {...props}>
    <Flexbox
      alignItems={['unset', 'center', 'center', 'center']}
      flexDirection={['unset', 'column', 'column', 'row']}
      gap="l-size"
      justifyContent="center"
    >
      <Image height={236} src={src} />

      <Flexbox alignItems="flex-start" flexDirection="column">
        <Heading level={5}>{title}</Heading>

        {children}
      </Flexbox>
    </Flexbox>
  </Banner>
)

export default BannerWithImage
