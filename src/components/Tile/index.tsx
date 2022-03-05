import { Flexbox } from 'components'
import { boxStyleProps } from '@zapalniczki/shared-components'
import styled from 'styled-components'
import { breakpoints, getColor, getRadius, getSpace } from 'styles'

const Tile = styled(Flexbox)`
  background-color: ${getColor('white')};
  border: 1px solid;
  border-color: ${getColor('gray-medium')};
  border-radius: ${getRadius('medium')};
  flex-direction: column;
  padding: ${getSpace('l-size')};

  ${(props) => breakpoints('tablet mobile')`
    padding: ${getSpace('m-size')(props)};
  `}

  width: 100%;

  ${boxStyleProps}
`

export const TileHeading = styled(Tile)`
  border: unset;
  border-bottom-left-radius: unset;
  border-bottom-right-radius: unset;
  padding-bottom: ${getSpace('m-size')};
`

export const TileBody = styled(Tile)`
  border: unset;
  border-top-left-radius: unset;
  border-top-right-radius: unset;
  background: ${getColor('gray-light')};
  padding-top: ${getSpace('m-size')};
  height: 100%;
`

export default Tile
