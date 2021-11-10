import { Flexbox } from 'components'
import styled from 'styled-components'
import getSpace from 'styles/getSpace'

const FormRow = styled(Flexbox)`
  &:not(:last-child) {
    margin-bottom: ${getSpace('m-size')};
  }
`

export default FormRow
