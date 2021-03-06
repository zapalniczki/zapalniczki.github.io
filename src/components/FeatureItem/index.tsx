import { Tile, Text } from 'components'
import React, { ReactNode } from 'react'
import { Flexbox } from '@zapalniczki/shared-components'

type Props = {
  children: ReactNode
  subtitle?: string
  title?: string
}

const FeatureItem = ({ children, subtitle, title }: Props) => (
  <Tile height={subtitle ? '23.53rem' : '20rem'} padding={0}>
    <Flexbox alignItems="center" flexGrow={1} justifyContent="center">
      {children}
    </Flexbox>

    <Flexbox
      alignItems="center"
      // backgroundColor="background-color" FFFFFF
      flexDirection="column"
      padding="m-size"
    >
      <Text type="subtitle-1">{title}</Text>

      {subtitle && <Text type="subtitle-2">{subtitle}</Text>}
    </Flexbox>
  </Tile>
)

export default FeatureItem
