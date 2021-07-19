import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

type Props = SpaceProps;

const Separator = styled.hr<Props>`
  width: 100%;
  background: ${(props) => props.theme.colors.gray3};
  border: none;
  height: 1px;
  margin: 20px 0;

  ${space};
`;

export default Separator;
