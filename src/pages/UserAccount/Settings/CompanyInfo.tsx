import getUser from "api/users/getUser";
import Flexbox from "components/Flexbox";
import QueryLoader from "components/QueryLoader";
import Text from "components/Text";
import Tile from "components/Tile";
import TileHeader from "components/TileHeader";
import React from "react";
import { useQuery } from "react-query";

type Props = {
  userId: string;
};

const CompanyInfo = ({ userId }: Props) => {
  const userQuery = useQuery(["user", userId], getUser);

  return (
    <Tile>
      <QueryLoader query={userQuery}>
        {(data) => {
          return (
            <Flexbox flexDirection="column">
              <TileHeader title="Dane klienta" />

              <Text>{data.address.name}</Text>
              <Text>{data.address.street}</Text>
              <Text>
                {data.address.post_code} {data.address.city}
              </Text>
              <Text>{data.address.country}</Text>
            </Flexbox>
          );
        }}
      </QueryLoader>
    </Tile>
  );
};

export default CompanyInfo;
