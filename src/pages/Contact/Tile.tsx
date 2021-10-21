import { IconName } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Flexbox, Heading, Tile as TileComponent } from 'components'
import React, { ReactNode } from 'react'

type Props = {
  content: ReactNode,
  extended?: boolean,
  icon?: IconName,
  title: string
}

const Tile = ({ content, extended, icon, title }: Props) => (
  <TileComponent
    flexDirection="column"
    gridColumn={extended ? 'auto / span 2' : 'auto'}
  >
    <Flexbox alignItems="center" marginBottom="m-size">
      {icon && <FontAwesomeIcon icon={icon} size="2x" />}

      <Heading level={6} marginLeft={icon && 'm-size'}>
        {title}
      </Heading>
    </Flexbox>

    {content}
  </TileComponent>
)

export default Tile