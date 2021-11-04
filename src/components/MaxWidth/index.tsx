import { Flexbox } from 'components'
import styled from 'styled-components'
import { flexbox } from 'styled-system'

const MaxWidth = styled(Flexbox)`
  max-width: 120rem;
  width: 100%;
  flex-direction: column;
  border: 2px solid red;

  ${flexbox}
`

export default MaxWidth
