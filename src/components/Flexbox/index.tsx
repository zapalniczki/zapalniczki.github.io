import Box from '../Box'
import styled from 'styled-components'
import getSpace from 'styles/getSpace'
import { Space } from 'styles/theme'

type Props = {
  gap?: Space
}

const Flexbox = styled(Box).attrs(() => ({
  display: 'flex'
}))<Props>`
  gap: ${(props) => (props.gap ? getSpace(props.gap)(props) : undefined)};
`

export default Flexbox
