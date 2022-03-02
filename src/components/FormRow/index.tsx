import { Flexbox } from 'components'
import styled from 'styled-components'
import breakpoints from 'styles/breakpoints'
import getSpace from 'styles/getSpace'

type Props = {
  checkbox?: boolean
  vertical?: boolean
}

const FormRow = styled(Flexbox)<Props>`
  gap: ${(props) =>
    props.checkbox ? getSpace('l-size')(props) : getSpace('m-size')(props)};
  flex-direction: ${(props) => (props.vertical ? 'column' : 'column')};

  &:not(:last-child) {
    margin-bottom: ${getSpace('m-size')};
  }

  ${(props) => breakpoints('desktop max')`
    flex-direction: ${props.vertical ? 'column' : 'row'};
  `}
`

export default FormRow
