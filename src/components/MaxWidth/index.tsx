import { Flexbox } from 'components'
import styled from 'styled-components'
import { flexbox } from 'styled-system'
import breakpoints from 'styles/breakpoints'
import getSpace from 'styles/getSpace'

type Props = { innerPadding?: boolean }
const MaxWidth = styled(Flexbox)<Props>`
  border: 2px solid red;

  max-width: 120rem;
  width: 100%;
  flex-direction: column;
  padding: ${(props) =>
    props.innerPadding && `0 ${getSpace('xs-size')(props)}`};

  ${breakpoints('desktop')`
    padding: 0;
  `}

  ${flexbox};
`

export default MaxWidth
