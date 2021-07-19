import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};
const PageColumns = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 2.1fr 0.9fr;
`;

export default PageColumns;
