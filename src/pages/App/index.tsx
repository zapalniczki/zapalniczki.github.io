import React, { useEffect } from "react";
import { useState } from "react";
import { Redirect, Switch } from "react-router";
import Login from "../Login/Login";
import Main from "../Main";
import Register from "../Register";
import UserAccount from "../UserAccount";
import NoMatch from "../NoMatch";
import NewOrder from "../NewOrder";
import { initializeApp } from "firebase/config";
import Route from "components/Route";

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [userId, setUserId] = useState<string>();

  useEffect(() => {
    initializeApp();
  }, []);

  return (
    <Switch>
      {userId && (
        <Route path="/newOrder">
          <NewOrder
            userId={userId}
            setIsAuthorized={setIsAuthorized}
            isAuthorized={isAuthorized}
          />
        </Route>
      )}

      <Route path="/register">
        <Register
          setIsAuthorized={setIsAuthorized}
          isAuthorized={isAuthorized}
        />
      </Route>

      <Route path="/konto">
        {isAuthorized ? (
          <UserAccount
            userId={userId}
            setIsAuthorized={setIsAuthorized}
            isAuthorized={isAuthorized}
          />
        ) : (
          <Redirect to="/" />
        )}
      </Route>

      <Route path="/404">
        <NoMatch
          setIsAuthorized={setIsAuthorized}
          isAuthorized={isAuthorized}
        />
      </Route>

      <Route path="/login">
        {isAuthorized ? (
          <Redirect to="/konto" />
        ) : (
          <Login
            setUserId={setUserId}
            isAuthorized={isAuthorized}
            setIsAuthorized={setIsAuthorized}
          />
        )}
      </Route>

      <Route exact path="/">
        <Main setIsAuthorized={setIsAuthorized} isAuthorized={isAuthorized} />
      </Route>

      <Redirect from="/*" to="/404" />
    </Switch>
  );
};

export default App;
