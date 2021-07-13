import React, { ReactNode } from "react";
import { Link as LinkRouter } from "react-router-dom";
import styled from "styled-components/macro";

type Props = { children: ReactNode; to: string };

const Link = (props: Props) => {
  return <Container to={props.to}>{props.children}</Container>;
};

const Container = styled(LinkRouter)`
  color: ${(props) => props.theme.colors.blue};
  text-decoration: none;
`;

export default Link;
