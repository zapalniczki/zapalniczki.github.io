import styled from 'styled-components'
import {
  compose,
  flex,
  grid,
  layout,
  position,
  space,
  border,
  flexbox,
  LayoutProps,
  SpaceProps,
  PositionProps,
  FlexProps,
  GridProps,
  BorderProps,
  FlexboxProps,
  background,
  BackgroundProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  BorderRadiusProps,
  borderRadius,
  shadow,
  ShadowProps
} from 'styled-system'

const styleProps = compose(
  layout,
  space,
  position,
  flex,
  grid,
  border,
  flexbox,
  background,
  color,
  typography,
  shadow,
  borderRadius
)

type Props = LayoutProps &
  SpaceProps &
  PositionProps &
  FlexProps &
  GridProps &
  BorderProps &
  FlexboxProps &
  BackgroundProps &
  ColorProps &
  TypographyProps &
  BorderRadiusProps &
  ShadowProps

const Box = styled.div<Props>`
  ${styleProps}
`

export default Box
