import { Flexbox } from 'components'
import styled from 'styled-components'

const Row = styled(Flexbox)`
  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.space['m-size']};
  }
`

export default Row
