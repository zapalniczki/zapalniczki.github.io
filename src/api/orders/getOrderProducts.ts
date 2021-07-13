import { getFirestore } from "@firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { QueryFunctionContext } from "react-query";

import getCollection from "utils/getCollection";
import orderProduct from "models/orderProduct";

const getOrderProducts = async (
  params: QueryFunctionContext<[string, string], number>
) => {
  const orderId = params.queryKey[1];

  const db = getFirestore();
  const ref = collection(db, "orders", orderId, "products");
  const snapshot = await getDocs(ref);
  const products = getCollection(snapshot, orderProduct);

  return products;
};

export default getOrderProducts;
