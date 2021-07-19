import React from "react";
import { useQuery } from "react-query";
import getUserOrders from "api/users/getUserOrders";
import Row from "components/Row";
import Box from "components/Box";
import Link from "components/Link";
import Text from "components/Text";
import Tile from "components/Tile";
import Flexbox from "components/Flexbox";
import Chip, { ChipVariant } from "components/Chip";
import { Order } from "models/order";
import format from "date-fns/format";
import parseIso from "date-fns/parseISO";
import { isToday, isYesterday } from "date-fns";
import QueryLoader from "components/QueryLoader";

type Props = {
  userId: string;
};

const Orders = ({ userId }: Props) => {
  const userOrdersQuery = useQuery(["userOrders", userId], getUserOrders);

  return (
    <QueryLoader query={userOrdersQuery}>
      {(orders) => (
        <div>
          <Flexbox justifyContent="flex-end" marginTop="20px">
            <Link to="/newOrder">Nowe zamówienie</Link>
          </Flexbox>

          <Box marginTop="20px" padding="0 20px">
            <Row>
              <Box gridArea="1 / 1 / 1 / 5">
                <Text>Numer Zamówienia</Text>
              </Box>

              <Box gridArea="1 / 5 / 1 / 8">
                <Text>Utworzono</Text>
              </Box>

              <Box gridArea="1 / 8 / 1 / 11">
                <Text>Kwota zamówienia</Text>
              </Box>

              <Box gridArea="1 / 11 / 1 / 14">
                <Text>Obecny status</Text>
              </Box>

              <Flexbox justifyContent="flex-end" gridArea="1 / 14 / 1 / 17">
                <Text>Ostatnia zmiana</Text>
              </Flexbox>
            </Row>
          </Box>

          {orders.length === 0 ? (
            <Tile>
              <Row>
                <Flexbox justifyContent="center" gridArea="1 / 1 / 1 / 17">
                  <Text textAlign="center">
                    Nie masz żadnych zamówień{" "}
                    <Link to="/newOrder">Załóż nowe</Link>
                  </Text>
                </Flexbox>
              </Row>
            </Tile>
          ) : (
            orders.map((order) => (
              <Tile marginTop={12} paddingY={10}>
                <Row>
                  <Flexbox alignItems="center" gridArea="1 / 1 / 1 / 5">
                    <Link to={`/konto/order/${order._id}`}>{order._id}</Link>
                  </Flexbox>

                  <Flexbox alignItems="center" gridArea="1 / 5 / 1 / 8">
                    <Text>{getCreatedOnValue(order.createdOn)}</Text>
                  </Flexbox>

                  <Flexbox alignItems="center" gridArea="1 / 8 / 1 / 11">
                    <Text>{order.total}zł</Text>
                  </Flexbox>

                  <Flexbox alignItems="center" gridArea="1 / 11 / 1 / 14">
                    <Chip variant={mapStatusToVariant[order.status]}>
                      {mapStatusToText[order.status]}
                    </Chip>
                  </Flexbox>

                  <Flexbox
                    justifyContent="flex-end"
                    alignItems="center"
                    gridArea="1 / 14 / 1 / 17"
                  >
                    <Text>{getCreatedOnValue(order.updatedOn)}</Text>
                  </Flexbox>
                </Row>
              </Tile>
            ))
          )}
        </div>
      )}
    </QueryLoader>
  );
};

const mapStatusToText: Record<Order["status"], string> = {
  OPEN: "Otwarte",
  CLOSED: "Zakończone",
};

const mapStatusToVariant: Record<Order["status"], ChipVariant> = {
  OPEN: "POSITIVE",
  CLOSED: "NEGATIVE",
};

export const dateFormat = "dd.MM.yyyy";
export const timeFormat = "HH:mm";
export default Orders;

const getCreatedOnValue = (dateString: string) => {
  const date = parseIso(dateString);
  const time = format(date, timeFormat);

  if (isToday(date)) {
    return `Dzisiaj, ${time}`;
  } else if (isYesterday(date)) {
    return `Wczoraj, ${time}`;
  } else {
    return format(date, dateFormat);
  }
};
