import { Flexbox } from 'components'
// eslint-disable-next-line no-restricted-imports
import { boxStyleProps } from 'components/Box'
import styled from 'styled-components'
import { breakpoints } from 'styles'
import { getColor } from 'styles'
import { getRadius } from 'styles'
import { getSpace } from 'styles'

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

export default Tile
