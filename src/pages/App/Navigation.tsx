import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components/macro";
import Button from "components/Button";
import { maxWidthStyles } from "components/Page";
import Flexbox from "components/Flexbox";

type Props = {
  isAuthorized: boolean;
  setIsAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navigation = ({ isAuthorized, setIsAuthorized }: Props) => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <Container>
        <Flexbox alignItems="center">
          {pathname !== "/" && <Link to="/">Strona Glowna</Link>}
        </Flexbox>

        <Flexbox marginLeft="auto">
          {isAuthorized ? (
            <>
              <Link to="/konto">Konto uzytkownika</Link>
              <Button onClick={() => setIsAuthorized(false)}>
                Wyloguj się
              </Button>
            </>
          ) : (
            <>
              <Link to="/register">Zarejestruj</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </Flexbox>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  padding-left: auto;
  height: 60px;
  align-items: center;
  /* position: absolute; */
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  background-color: #f6f7fa;
  justify-content: center;

  & > * > *:not(:last-child) {
    margin-right: 15px;
  }
`;

const Container = styled.div`
  display: flex;
  ${maxWidthStyles}
`;

export default Navigation;
