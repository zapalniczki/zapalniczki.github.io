import React from "react";
import Header from "components/Page/Header";
import Page from "components/Page";

type Props = {
  isAuthorized: boolean;
  setIsAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
};

const Main = ({ isAuthorized, setIsAuthorized }: Props) => {
  return (
    <>
      <Header isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized}>
        Strona Główna
      </Header>

      <Page>Main Page Content</Page>
    </>
  );
};

export default Main;
