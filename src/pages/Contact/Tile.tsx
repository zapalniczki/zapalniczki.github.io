import { IconName } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Flexbox, Heading, Tile as TileComponent } from 'components'
import React, { ReactNode } from 'react'

type Props = {
  icon?: IconName
  title: string
  content: ReactNode
  extended?: boolean
}

const Tile = ({ extended, content, icon, title }: Props) => (
  <TileComponent
    gridColumn={extended ? 'auto / span 2' : 'auto'}
    flexDirection="column"
  >
    <Flexbox alignItems="center" marginBottom="m-size">
      {icon && <FontAwesomeIcon size="2x" icon={icon} />}

      <Heading level={6} marginLeft={icon && 'm-size'}>
        {title}
      </Heading>
    </Flexbox>

    {content}
  </TileComponent>
)

export default Tile
