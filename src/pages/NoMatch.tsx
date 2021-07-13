import React from "react";
import Page from "components/Page";
import Header from "components/Page/Header";

type Props = {
  isAuthorized: boolean;
  setIsAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
};

const NoMatch = ({ isAuthorized, setIsAuthorized }: Props) => {
  return (
    <>
      <Header isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized}>
        NoMatch
      </Header>
      <Page>alfa</Page>
    </>
  );
};

export default NoMatch;
