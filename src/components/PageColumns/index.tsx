import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};
const PageColumns = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  border: 3px solid blue;

  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 2fr 1fr;
  padding: 1rem 0 0 0;
`;

export default PageColumns;
