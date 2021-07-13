import styled from "styled-components";

const Separator = styled.hr`
  width: 100%;
  background: ${(props) => props.theme.colors.gray3};
  border: none;
  height: 1px;
  margin: 10px 0;
`;

export default Separator;
