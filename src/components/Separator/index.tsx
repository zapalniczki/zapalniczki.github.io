import { Box } from 'components'
import styled from 'styled-components'
import { space } from 'styled-system'
import getColor from 'styles/getColor'

const Separator = styled(Box)`
  width: 100%;
  height: 1px;
  background: ${getColor('border-color')};
  margin: ${(props) => `${props.theme.space['m-size']} 0`};

  ${space}
`

export default Separator
