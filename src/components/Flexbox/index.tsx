import styled from 'styled-components'
import { getSpace, Space } from 'styles'
import Box, { boxStyleProps } from '../Box'

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
