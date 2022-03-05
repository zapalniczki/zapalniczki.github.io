import { Box, boxStyleProps } from '@zapalniczki/shared-components'
import styled from 'styled-components'
import { system } from 'styled-system'
import { Space } from 'styles'

type Props = GapProps

const gap = system({
  gap: {
    property: 'gap',
    scale: 'space'
  }
})

const Flexbox = styled(Box)<Props>`
  display: flex;

  ${boxStyleProps}
  ${gap}
`

type GapProps = {
  gap?: Space
}

export default Flexbox
