import React from 'react'
import { ReactComponent as Svg } from 'assets/logo.svg'
import styled from 'styled-components'

type Props = {
  expanded?: boolean
}

const Logo = ({ expanded }: Props) => <StyledSvg $expanded={expanded} />

type StyledSvgProps = { $expanded?: Props['expanded'] }
const StyledSvg = styled(Svg)<StyledSvgProps>`
  width: auto;
  height: ${(props) => (props.$expanded ? '4.5rem' : '6rem')};
  margin-left: -1rem;
`

export default Logo
