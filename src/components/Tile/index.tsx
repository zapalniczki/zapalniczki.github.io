import styled from "styled-components";
import { padding, PaddingProps, space, SpaceProps } from "styled-system";

type TileProps = PaddingProps & SpaceProps;
const Tile = styled.div<TileProps>`
  display: flex;
  flex-direction: column;
  border-radius: ${(props) => props.theme.radii.medium};
  padding: 20px;
  border: 1px solid #dde0e5;
  margin-top: 20px;

  ${padding}
  ${space}
`;

export default Tile;
