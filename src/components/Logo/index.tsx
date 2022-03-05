import React from 'react'
import { ReactComponent as Svg } from 'assets/logo.svg'
import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { Box } from 'components'

type Props = {
  expanded?: boolean
} & SpaceProps

const Logo = ({ expanded, ...props }: Props) => (
  <Box {...props}>
    <StyledSvg $expanded={expanded} />
  </Box>
)

type StyledSvgProps = {
  $expanded?: Props['expanded']
} & SpaceProps

const StyledSvg = styled(Svg)<StyledSvgProps>`
  width: auto;
  height: ${(props) => (props.$expanded ? '4.5rem' : '6rem')};

  ${space}
`

export default Logo
