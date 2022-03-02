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
  ShadowProps,
  GridTemplateColumnsProps,
  gridTemplateColumns
} from 'styled-system'

export const boxStyleProps = compose(
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
  borderRadius,
  gridTemplateColumns
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
  ShadowProps &
  GridTemplateColumnsProps

const Box = styled.div<Props>`
  ${boxStyleProps}
`

export default Box
