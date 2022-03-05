import { Box, boxStyleProps } from '@zapalniczki/shared-components'
import styled from 'styled-components'
import {
  ResponsiveValue,
  system,
  Theme,
  TLengthStyledSystem
} from 'styled-system'

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
  gap?:
    | ResponsiveValue<
        string | number | symbol,
        Required<Theme<TLengthStyledSystem>>
      >
    | undefined
}

export default Flexbox
