import { Flexbox } from '@zapalniczki/shared-components'
import styled from 'styled-components'
import { flexbox } from 'styled-system'
import { breakpoints, getSpace, MAX_WIDTH } from 'styles'

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
