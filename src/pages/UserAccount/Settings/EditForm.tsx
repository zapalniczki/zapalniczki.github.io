import React, { useState } from "react";
import getUser from "api/users/getUser";
import { useQuery } from "react-query";
import Flexbox from "components/Flexbox";
import Tile from "components/Tile";
import QueryLoader from "components/QueryLoader";
import { Field, Form } from "react-final-form";
import { FormValues, useForm } from "./form";
import TileHeader from "components/TileHeader";
import Input from "components/Input";
import Button from "components/Button";
import Label from "components/Label";
import SectionTitle from "components/SectionTitle";
import TextButton from "components/TextButton";
import ResultScreen from "components/ResultScreen";
import InputError from "components/InputError";
import { emailRegex, phoneNumberRegex, postCodeRegex } from "models/user";

type Props = {
  userId: string;
};

const EditForm = ({ userId }: Props) => {
  const userQuery = useQuery(["user", userId], getUser);
  const [view, setView] = useState<View>("form");

  const [editingForm, setEditingForm] = useState(false);
  const { onSubmit, initialValues } = useForm(setEditingForm, setView);

  if (view === "success") {
    return <ResultScreen variant={view} />;
  }

  if (view === "fail") {
    return <ResultScreen variant={view} />;
  }

  return (
    <Tile>
      <QueryLoader query={userQuery}>
        {(data) => (
          <Form onSubmit={onSubmit} initialValues={initialValues(data)}>
            {({ handleSubmit, form }) => (
              <Flexbox as="form" onSubmit={handleSubmit} flexDirection="column">
                <TileHeader title="Ustawienia">
                  {!editingForm && (
                    <TextButton onClick={() => setEditingForm(true)}>
                      Edytuj dane
                    </TextButton>
                  )}
                </TileHeader>

                {data.contact && (
                  <Flexbox flexDirection="column">
                    <SectionTitle>Dane kontaktowe</SectionTitle>

                    <Field<FormValues["contact"]["email"]>
                      validate={(value) => {
                        if (!value) {
                          return "To pole nie może być puste";
                        }

                        if (!value.match(emailRegex)) {
                          return "Pole zostało źle wypełnione";
                        }
                      }}
                      name="contact.email"
                    >
                      {(props) => (
                        <InputError meta={props.meta}>
                          <Label title="Email">
                            <Input disabled={!editingForm} {...props.input} />
                          </Label>
                        </InputError>
                      )}
                    </Field>

                    <Field<FormValues["contact"]["phone_number"]>
                      validate={(value) => {
                        if (!value) {
                          return "To pole nie może być puste";
                        }

                        if (!value.match(phoneNumberRegex)) {
                          return "Numer telefonu powinien być w formacie +48XXXXXXXXX, gdzie X oznacza cyfrę";
                        }
                      }}
                      name="contact.phone_number"
                    >
                      {(props) => (
                        <InputError meta={props.meta}>
                          <Label title="Numer telefonu">
                            <Input disabled={!editingForm} {...props.input} />
                          </Label>
                        </InputError>
                      )}
                    </Field>
                  </Flexbox>
                )}

                <Flexbox flexDirection="column">
                  <SectionTitle>Dane do wysyłki</SectionTitle>

                  <Field<FormValues["billing_address"]["name"]>
                    validate={(value) => {
                      if (!value) {
                        return "To pole nie może być puste";
                      }

                      if (value.length < 5) {
                        return "Minimalna liczba znaków to 5";
                      }

                      if (value.length > 255) {
                        return "Maksymalna liczba znaków to 255";
                      }
                    }}
                    name="billing_address.name"
                  >
                    {(props) => (
                      <InputError meta={props.meta}>
                        <Label title="Nazwa klienta">
                          <Input disabled={!editingForm} {...props.input} />
                        </Label>
                      </InputError>
                    )}
                  </Field>

                  <Field<FormValues["billing_address"]["street"]>
                    validate={(value) => {
                      if (!value) {
                        return "To pole nie może być puste";
                      }
                    }}
                    name="billing_address.street"
                  >
                    {(props) => (
                      <InputError meta={props.meta}>
                        <Label title="Ulica i numer lokalu/mieszkania">
                          <Input disabled={!editingForm} {...props.input} />
                        </Label>
                      </InputError>
                    )}
                  </Field>

                  <Field<FormValues["billing_address"]["post_code"]>
                    validate={(value) => {
                      if (!value) {
                        return "To pole nie może być puste";
                      }

                      if (!value.match(postCodeRegex)) {
                        return "Prawidłowy format kodu pocztowego to XX-XXX, gdzie X oznacza cyfrę";
                      }
                    }}
                    name="billing_address.post_code"
                  >
                    {(props) => (
                      <InputError meta={props.meta}>
                        <Label title="Kod pocztowy">
                          <Input disabled={!editingForm} {...props.input} />
                        </Label>
                      </InputError>
                    )}
                  </Field>

                  <Field name="billing_address.country">
                    {(props) => (
                      <InputError meta={props.meta}>
                        <Label title="Państwo">
                          <Input disabled {...props.input} />
                        </Label>
                      </InputError>
                    )}
                  </Field>

                  {editingForm && (
                    <Flexbox justifyContent="flex-end" marginTop="20px">
                      <Button
                        onClick={(event) => {
                          event.preventDefault();
                          form.reset();
                          setEditingForm(false);
                        }}
                        variant="secondary"
                        marginRight="10px"
                      >
                        Anuluj
                      </Button>
                      <Button type="submit">Zapisz zmiany</Button>
                    </Flexbox>
                  )}
                </Flexbox>
              </Flexbox>
            )}
          </Form>
        )}
      </QueryLoader>
    </Tile>
  );
};

export type View = "form" | "success" | "fail";

export default EditForm;
