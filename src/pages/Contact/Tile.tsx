import { IconName } from '@fortawesome/free-solid-svg-icons'
import { Tile as TileComponent } from 'components'
import React, { ReactNode } from 'react'
import TileHeading from './TileHeading'

type Props = {
  content?: ReactNode
  extended?: boolean
  icon?: IconName
  title?: string
}

const Tile = ({ content, extended, icon, title }: Props) => (
  <TileComponent
    flexDirection="column"
    gridColumn={['unset', '1fr', '1fr', extended ? 'auto / span 2' : 'auto']}
    paddingX={['unset', 'xs-size', 'xs-size', 'l-size']}
  >
    <TileHeading icon={icon} title={title} />

    {content}
  </TileComponent>
)

export default Tile
