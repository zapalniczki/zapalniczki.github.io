import styled from "styled-components/macro";
import {
  compose,
  space,
  border,
  BorderProps,
  SpaceProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  background,
  BackgroundProps,
  color,
  ColorProps,
  shadow,
  ShadowProps,
  grid,
  GridProps,
} from "styled-system";

type Props = LayoutProps &
  SpaceProps &
  BorderProps &
  PositionProps &
  ColorProps &
  BackgroundProps &
  ShadowProps &
  GridProps;

const Box = styled.div<Props>`
  ${compose(layout, space, border, position, background, color, shadow, grid)}
`;

export default Box;
