import getUser from "api/users/getUser";
import Box from "components/Box";
import Flexbox from "components/Flexbox";
import Image from "components/Image";
import Link from "components/Link";
import QueryLoader from "components/QueryLoader";
import Separator from "components/Separator";
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
              <Link to="/konto/settings">Zobacz szczegóły</Link>
            </TileHeader>

            <Flexbox flexDirection="column" alignItems="center">
              <Box width="100px" height="100px">
                <Image src="/" rounded></Image>
              </Box>

              <Text marginTop="5px" fontSize="18px" textAlign="center">
                {address.name}
              </Text>
              <Text color="blue" textAlign="center" marginTop="5px">
                {contact.email}
              </Text>
              <Text textAlign="center" marginTop="5px">
                {contact.phone_number}
              </Text>
            </Flexbox>

            <Separator />

            <Text as="strong">Adres do wysyłki</Text>

            <Text>{billing_address.street}</Text>
            <Text>
              {billing_address.post_code}, {billing_address.city}
            </Text>
            <Text>{billing_address.country}</Text>
          </Tile>
        );
      }}
    </QueryLoader>
  );
};

export default UserProfile;
