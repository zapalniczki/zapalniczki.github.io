import React from "react";
import { useRouteMatch } from "react-router";
import { useQuery } from "react-query";
import getOrder from "api/orders/getOrder";
import OrderForm from "pages/NewOrder/OrderForm";
import QueryLoader from "components/QueryLoader";
import getOrderProducts from "api/orders/getOrderProducts";

type Props = {
  userId: string;
};

const Order = ({ userId }: Props) => {
  const orderId = useRouteMatch<{ id: string }>().params.id;
  const orderQuery = useQuery(["order", orderId], getOrder);
  const orderProductsQuery = useQuery(
    ["orderProducts", orderId],
    getOrderProducts
  );

  return (
    <QueryLoader query={orderQuery}>
      {(orderData) => {
        return (
          <QueryLoader query={orderProductsQuery}>
            {(productsData) => {
              return (
                <OrderForm
                  prevValues={{
                    ...orderData,
                    _products: productsData,
                  }}
                  userId={userId}
                />
              );
            }}
          </QueryLoader>
        );
      }}
    </QueryLoader>
  );
};

export default Order;
