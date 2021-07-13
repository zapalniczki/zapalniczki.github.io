import React from "react";
import Header from "components/Page/Header";

type Props = {
  isAuthorized: boolean;
  setIsAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
};

const Register = ({ isAuthorized, setIsAuthorized }: Props) => {
  return (
    <>
      <Header isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized}>
        Register Page
      </Header>
    </>
  );
};

export default Register;
