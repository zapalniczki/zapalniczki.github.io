import { Tile as TileComponent } from 'components'
// eslint-disable-next-line no-restricted-imports
import { boxStyleProps } from 'components/Box'
import styled from 'styled-components'
import { breakpoints, getColor, getSpace } from 'styles'

const TileContent = styled(TileComponent)`
  background-color: ${getColor('gray-light')};
  border-color: transparent;
  flex-direction: column;
  height: 100%;
  padding-left: ${getSpace('l-size')};
  padding-right: ${getSpace('l-size')};
  padding-bottom: ${getSpace('l-size')};
  padding-top: ${getSpace('m-size')};

  ${(props) => breakpoints('mobile')`
    padding-left: ${getSpace('s-size')(props)};
    padding-right: ${getSpace('s-size')(props)};
  `}

  ${boxStyleProps};
`

export default TileContent
