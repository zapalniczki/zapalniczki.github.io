import { Box } from 'components'
import styled from 'styled-components'
import { layout } from 'styled-system'

const FieldWrapper = styled(Box)`
  width: 100%;

  &:not(:first-child) {
    margin-left: ${(props) => props.theme.space['s-size']};
  }

  ${layout};
`

export default FieldWrapper
