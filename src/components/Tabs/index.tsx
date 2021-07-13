import { ReactNode } from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

export type TabProps = {
  to: string;
  children: ReactNode;
};
export const Tab = ({ to, children }: TabProps) => {
  const { pathname } = useLocation();

  return (
    <TabStyled isActive={pathname === to} to={to}>
      {children}
    </TabStyled>
  );
};

type TabStyledProps = {
  isActive?: boolean;
};
const TabStyled = styled(Link)<TabStyledProps>`
  height: 50px;
  align-items: center;
  display: flex;
  padding: 0 10px;
  justify-content: center;
  font-weight: ${(props) => (props.isActive ? "600" : "400")};
  text-decoration: none;

  border-bottom: ${(props) =>
    props.isActive && `2px solid ${props.theme.colors.blue}`};

  color: ${(props) =>
    props.isActive ? props.theme.colors.blue : props.theme.colors.gray2};

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
