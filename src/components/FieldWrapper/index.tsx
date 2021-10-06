import { Box } from 'components'
import styled from 'styled-components'

const FieldWrapper = styled(Box)`
  width: 100%;

  &:not(:first-child) {
    margin-left: ${(props) => props.theme.space['s-size']};
  }
`

export default FieldWrapper
