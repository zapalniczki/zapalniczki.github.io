import { Box } from 'components'
import styled from 'styled-components'
import { layout } from 'styled-system'
import breakpoints from 'styles/breakpoints'
import getSpace from 'styles/getSpace'

const FieldWrapper = styled(Box)`
  width: 100%;

  ${(props) => breakpoints('desktop')`
    &:not(:first-child) {
      margin-left: ${getSpace('s-size')(props)};
    }
  `}

  ${layout};
`

export default FieldWrapper
