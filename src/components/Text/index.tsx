import { forwardRef, ReactNode } from 'react'
import styled from 'styled-components/macro'
import {
  color,
  ColorProps,
  typography,
  TypographyProps,
  shadow,
  ShadowProps,
  compose,
  space,
  SpaceProps,
} from 'styled-system'

type Props = {
  children: ReactNode
  as?: string | React.ComponentType<any>
  className?: string
} & StyledProps

const Text = forwardRef(({ as = 'span', className, children, ...props }: Props, ref) => (
  <Container ref={ref} className={className} as={as} {...props}>
    {children}
  </Container>
))

type StyledProps = TypographyProps & ColorProps & ShadowProps & SpaceProps

const Container = styled.span<StyledProps>`
  white-space: pre-line;

  ${compose(typography, color, shadow, space)}
`

export default Text
