import { Box } from 'components'
import styled from 'styled-components'
import { layout } from 'styled-system'
import getSpace from 'styles/getSpace'

const FieldWrapper = styled(Box)`
  width: 100%;

  &:not(:first-child) {
    margin-left: ${getSpace('s-size')};
  }

  ${layout};
`

export default FieldWrapper
