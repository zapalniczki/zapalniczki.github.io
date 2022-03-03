import Box, { boxStyleProps } from '../Box'
import styled from 'styled-components'
import { getSpace } from 'styles'
import { Space } from 'styles'

type Props = {
  gap?: Space
}

const Flexbox = styled(Box).attrs(() => ({
  display: 'flex'
}))<Props>`
  gap: ${(props) => (props.gap ? getSpace(props.gap)(props) : undefined)};

  ${boxStyleProps}
`

export default Flexbox
