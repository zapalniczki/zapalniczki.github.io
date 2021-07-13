import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Page from "components/Page";
import Header from "components/Page/Header";
import Settings from "./Settings";
import Order from "./Order";
import Orders from "./Orders";
import { Tab } from "components/Tabs";
import TabList from "components/Tabs/TabList";
import PageColumns from "components/PageColumns";

type Props = {
  isAuthorized: boolean;
  setIsAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
  userId?: string;
};

const UserAccount = ({ userId, isAuthorized, setIsAuthorized }: Props) => {
  if (!userId) return null;

  return (
    <>
      <Header isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized}>
        Konto Użytkownika
      </Header>
      <Page>
        <TabList>
          <Tab to={`/konto/orders`}>Zamówienia</Tab>
          <Tab to={`/konto/settings`}>Ustawienia</Tab>
        </TabList>

        <Switch>
          <Route path="/konto/order/:id">
            <PageColumns>
              <Order userId={userId} />
            </PageColumns>
          </Route>

          <Route path="/konto/orders">
            <Orders userId={userId} />
          </Route>

          <Route path="/konto/settings">
            <Settings userId={userId} />
          </Route>

          <Redirect from="*" to="/konto/orders" />
        </Switch>
      </Page>
    </>
  );
};

export default UserAccount;
