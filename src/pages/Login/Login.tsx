import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "components/Button";
import Page from "components/Page";
import Header from "components/Page/Header";
import { useMutation } from "react-query";
import getAuthorization from "api/getAuthorization";
import { Authorization } from "models/user";
import { Field, Form } from "react-final-form";

type Props = {
  isAuthorized: boolean;
  setIsAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
  setUserId: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const Login = ({ isAuthorized, setIsAuthorized, setUserId }: Props) => {
  return (
    <>
      <Header setIsAuthorized={setIsAuthorized} isAuthorized={isAuthorized}>
        Zaloguj się
      </Header>
      <Page>
        <Wrapper>
          {authorization.isSuccess ? (
            <h2>Udało się zalogować</h2>
          ) : (
            <Form onSubmit={() => undefined}>
              {({ values }) => {
                console.log(values);

                return (
                  <Form2>
                    <Field name="login">
                      {(props) => (
                        <InputStyled
                          placeholder="login"
                          value={props.input.value}
                          onChange={props.input.onChange}
                        />
                      )}
                    </Field>

                    <Field name="password">
                      {(props) => (
                        <InputStyled
                          value={props.input.value}
                          onChange={props.input.onChange}
                          placeholder="password"
                        />
                      )}
                    </Field>

                    <Button type="submit">Zaloguj się</Button>

                    {/* <Button
                      disabled={!login || !password || authorization.isLoading}
                      onClick={() => {
                        if (login.length > 0 && password.length > 0) {
                          authorization.mutate({
                            login: login,
                            password,
                          });
                        }
                      }}
                    >
                      login
                    </Button> */}
                  </Form2>
                );
              }}
            </Form>
          )}
        </Wrapper>
      </Page>
    </>
  );
};

const InputStyled = styled.input`
  height: 35px;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
`;

const Form2 = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
`;

export default Login;
