import { Flexbox } from 'components'
import styled from 'styled-components'
import { flexbox } from 'styled-system'
import breakpoints from 'styles/breakpoints'
import getSpace from 'styles/getSpace'
import { MAX_WIDTH } from 'styles/theme'

type Props = { innerPadding?: boolean }
const MaxWidth = styled(Flexbox)<Props>`
  max-width: ${MAX_WIDTH / 10}rem;
  width: 100%;
  flex-direction: column;
  padding: ${(props) =>
    props.innerPadding && `0 ${getSpace('xs-size')(props)}`};

  ${breakpoints('desktop max')`
    padding: 0;
  `}

  ${flexbox};
`

export default MaxWidth
