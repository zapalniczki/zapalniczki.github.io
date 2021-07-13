import React from "react";
import Page from "components/Page";
import Header from "components/Page/Header";
import OrderForm from "./OrderForm";
import PageColumns from "components/PageColumns";
import UserProfile from "./UserProfile";

type Props = {
  userId: string;
  isAuthorized: boolean;
  setIsAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
};

const NewOrder = ({ isAuthorized, setIsAuthorized, userId }: Props) => {
  return (
    <>
      <Header isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized}>
        New Order
      </Header>
      <Page>
        <PageColumns>
          <div>
            <OrderForm userId={userId} />
          </div>
          <div>
            <UserProfile userId={userId} />
          </div>
        </PageColumns>
      </Page>
    </>
  );
};

export default NewOrder;
