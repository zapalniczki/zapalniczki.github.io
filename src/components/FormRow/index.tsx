import { Flexbox } from 'components'
import styled from 'styled-components'
import breakpoints from 'styles/breakpoints'
import getSpace from 'styles/getSpace'

type Props = {
  vertical?: boolean
}

const FormRow = styled(Flexbox)<Props>`
  gap: ${getSpace('m-size')};
  flex-direction: ${(props) => (props.vertical ? 'column' : 'column')};

  &:not(:last-child) {
    margin-bottom: ${getSpace('m-size')};
  }

  ${(props) => breakpoints('desktop')`
    flex-direction: ${props.vertical ? 'column' : 'row'};
  `}
`

export default FormRow
