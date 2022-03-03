import { Box } from 'components'
import styled from 'styled-components'
import { space, layout } from 'styled-system'
import { getColor } from 'styles'
import { getSpace } from 'styles'

const Separator = styled(Box)`
  width: 100%;
  height: 1px;
  opacity: 0.5;
  background: ${getColor('gray-medium')};
  margin: ${getSpace('m-size')} 0;

  ${space}
  ${layout}
`

export default Separator
