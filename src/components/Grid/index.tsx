import styled from 'styled-components'
import { getSpace } from 'styles'
import { Box, boxStyleProps } from '@zapalniczki/shared-components'

const Grid = styled(Box)`
  display: grid;
  grid-gap: ${getSpace('l-size')};
  grid-template-columns: repeat(3, 1fr);

  ${boxStyleProps}
`

export default Grid
