import React, { ReactNode } from "react";
import { Link as LinkRouter } from "react-router-dom";
import styled from "styled-components/macro";

type Props = {
  children: ReactNode;
  to: string;
};

const Link = (props: Props) => {
  return (
    <LinkStyleButton as={LinkRouter} to={props.to}>
      {props.children}
    </LinkStyleButton>
  );
};

export const LinkStyleButton = styled.button`
  color: ${(props) => props.theme.colors.blue};
  text-decoration: none;
  background-color: none;
  padding: none;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 15px;
  font-family: "Roboto";
`;

export default Link;
