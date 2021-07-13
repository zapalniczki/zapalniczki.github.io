import { getFirestore } from "@firebase/firestore";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { QueryFunctionContext } from "react-query";

import userOrder from "models/userOrder";
import getCollection from "utils/getCollection";

const getUserOrders = async (
  params: QueryFunctionContext<[string, string], number>
) => {
  const userId = params.queryKey[1];

  const db = getFirestore();
  const ref = collection(db, "users", userId, "orders");
  const q = query(ref, orderBy("createdOn", "desc"));
  const snapshot = await getDocs(q);
  const orders = getCollection(snapshot, userOrder);

  return orders;
};

export default getUserOrders;
