import styled from "styled-components/macro";

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-gap: 0 10px;
  width: 100%;
  height: 100%;
`;

export default Row;
