import React from "react";
import getUser from "api/users/getUser";
import { useQuery } from "react-query";
import Flexbox from "components/Flexbox";
import PageColumns from "components/PageColumns";
import Tile from "components/Tile";
import QueryLoader from "components/QueryLoader";

type Props = {
  userId: string;
};

const Settings = ({ userId }: Props) => {
  const userQuery = useQuery(["user", userId], getUser);

  return (
    <QueryLoader query={userQuery}>
      {(data) => {
        return (
          <PageColumns>
            <Tile>
              <h3>Ustawienia</h3>

              {data.contact && (
                <Flexbox flexDirection="column" marginBottom="10px">
                  <h4>Dane kontaktowe</h4>
                  <label>
                    email
                    <input value={data.contact.email} disabled />
                  </label>

                  <label>
                    number telefonu
                    <input value={data.contact.phone_numer} disabled />
                  </label>
                </Flexbox>
              )}

              {data.address && (
                <Flexbox flexDirection="column" marginBottom="10px">
                  <h4>Dane kontaktowe</h4>
                  <label>
                    nazwa firmy
                    <input value={data.address.name} disabled />
                  </label>

                  <label>
                    ulica
                    <input value={data.address.street} disabled />
                  </label>
                  <label>
                    kod pocztowy
                    <input value={data.address.post_code} disabled />
                  </label>
                  <label>
                    country
                    <input value={data.address.country} disabled />
                  </label>
                </Flexbox>
              )}
            </Tile>
          </PageColumns>
        );
      }}
    </QueryLoader>
  );
};

export default Settings;
