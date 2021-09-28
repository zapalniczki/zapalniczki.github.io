import { Flexbox, Tile, Text } from 'components'
import React, { ReactNode } from 'react'

type Props = {
  title?: string
  subtitle?: string
  children: ReactNode
}

const FeatureItem = ({ title, subtitle, children }: Props) => (
  <Tile height={subtitle ? '23.53rem' : '20rem'} padding={0}>
    <Flexbox flexGrow={1} alignItems="center" justifyContent="center">
      {children}
    </Flexbox>

    <Flexbox
      backgroundColor="background-color"
      flexDirection="column"
      alignItems="center"
      padding="m-size"
    >
      <Text type="subtitle-1">{title}</Text>

      {subtitle && <Text type="subtitle-2">{subtitle}</Text>}
    </Flexbox>
  </Tile>
)

export default FeatureItem
