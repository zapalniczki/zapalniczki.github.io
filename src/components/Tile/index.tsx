import styled from "styled-components";
import {
  layout,
  LayoutProps,
  padding,
  PaddingProps,
  space,
  SpaceProps,
} from "styled-system";

type TileProps = PaddingProps & SpaceProps & LayoutProps;
const Tile = styled.div<TileProps>`
  display: flex;
  flex-direction: column;
  border-radius: ${(props) => props.theme.radii.medium};
  padding: 20px;
  border: 1px solid #dde0e5;
  margin-top: 20px;
  background: white;

  ${padding}
  ${space}
  ${layout}
`;

export default Tile;
