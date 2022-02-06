import { Box } from 'components'
import styled from 'styled-components'
import { space, layout } from 'styled-system'
import getColor from 'styles/getColor'
import getSpace from 'styles/getSpace'

const Separator = styled(Box)`
  width: 100%;
  height: 1px;
  background: ${getColor('border-color-light')};
  margin: ${(props) => `${getSpace('m-size')(props)} 0`};

  ${space}
  ${layout}
`

export default Separator
