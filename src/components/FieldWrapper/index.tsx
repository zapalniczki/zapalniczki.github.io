import { Box } from 'components'
import styled from 'styled-components'
import { flexBasis, layout } from 'styled-system'

const FieldWrapper = styled(Box)`
  width: 100%;

  ${layout}
  ${flexBasis}
`

export default FieldWrapper
