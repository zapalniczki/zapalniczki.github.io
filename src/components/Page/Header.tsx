import { ReactNode } from "react";
import styled from "styled-components";
import { maxWidthStyles } from ".";
import Navigation from "pages/App/Navigation";

type Props = {
  children: ReactNode;
  isAuthorized: boolean;
  setIsAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ children, setIsAuthorized, isAuthorized }: Props) => {
  return (
    <Container>
      <Navigation
        isAuthorized={isAuthorized}
        setIsAuthorized={setIsAuthorized}
      />
      <Title>{children}</Title>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  ${maxWidthStyles}
`;

export default Header;
