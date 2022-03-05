import { Flexbox } from '@zapalniczki/shared-components'
import styled from 'styled-components'
import { breakpoints, getSpace } from 'styles'

type Props = {
  vertical?: boolean
}

const FormRow = styled(Flexbox)<Props>`
  gap: ${getSpace('l-size')};
  flex-direction: ${(props) => (props.vertical ? 'column' : 'column')};

  ${(props) => breakpoints('desktop max')`
    flex-direction: ${props.vertical ? 'column' : 'row'};
  `}
`

export default FormRow
