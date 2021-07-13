import getUser from "api/users/getUser";
import Button from "components/Button";
import QueryLoader from "components/QueryLoader";
import Text from "components/Text";
import Tile from "components/Tile";
import TileHeader from "components/TileHeader";
import React from "react";
import { useQuery } from "react-query";

type Props = {
  userId: string;
};

const UserProfile = ({ userId }: Props) => {
  const userQuery = useQuery(["user", userId], getUser);

  return (
    <QueryLoader query={userQuery}>
      {(data) => {
        const { address, billing_address, contact } = data;

        return (
          <Tile>
            <TileHeader title="Klient">
              <Button>Zobacz szczegóły</Button>
            </TileHeader>

            <Text>{address.name}</Text>
            <Text>{contact.email}</Text>
            <Text>{contact.phone_numer}</Text>

            {[address, billing_address].map((e, index) => {
              return (
                <>
                  <Text marginTop="20px">
                    {index === 0 ? "Adres" : "Adress do wysyki"}
                  </Text>

                  <Text>{e.street}</Text>
                  <Text>
                    {e.post_code}, {e.city}
                  </Text>
                  <Text>{e.country}</Text>
                </>
              );
            })}
          </Tile>
        );
      }}
    </QueryLoader>
  );
};

export default UserProfile;
