import React from "react";
import styled from "styled-components";
import Button from "components/Button";
import Page from "components/Page";
import Header from "components/Page/Header";
import { Field, Form } from "react-final-form";
import { useForm } from "./form";
import Tile from "components/Tile";

type Props = {
  isAuthorized: boolean;
  setIsAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
  setUserId: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const Login = ({ isAuthorized, setIsAuthorized, setUserId }: Props) => {
  const { onSubmit, isSuccess } = useForm(setIsAuthorized, setUserId);

  return (
    <>
      <Header setIsAuthorized={setIsAuthorized} isAuthorized={isAuthorized}>
        Zaloguj się
      </Header>
      <Page>
        <Wrapper>
          {isSuccess ? (
            <h2>Udało się zalogować</h2>
          ) : (
            <Form
              onSubmit={onSubmit}
              initialValues={{
                login: "2",
                password: "beta",
              }}
            >
              {({ handleSubmit }) => (
                <Tile width="400px" as="form" onSubmit={handleSubmit}>
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
                </Tile>
              )}
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
`;

export default Login;
