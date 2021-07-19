import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

type Props = {
  children: ReactNode;
};
const Page = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export const maxWidthStyles = css`
  max-width: 1250px;
  width: 100%;
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  ${maxWidthStyles}
`;

export default Page;
