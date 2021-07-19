import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import Button from "components/Button";
import { maxWidthStyles } from "components/Page";

type Props = {
  isAuthorized: boolean;
  setIsAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navigation = ({ isAuthorized, setIsAuthorized }: Props) => {
  return (
    <Wrapper>
      <Container>
        {isAuthorized ? (
          <>
            <Link to="/konto">Konto uzytkownika</Link>
            <Button onClick={() => setIsAuthorized(false)}>Wyloguj się</Button>
          </>
        ) : (
          <>
            <Link to="/register">Zarejestruj</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  padding-left: auto;
  height: 60px;
  align-items: center;
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
  justify-content: flex-end;
  align-items: center;
  ${maxWidthStyles}
`;

export default Navigation;
