import { doc, getDoc, getFirestore } from "firebase/firestore";
import { QueryFunctionContext } from "react-query";
import order from "models/order";
import parseApiResponse from "utils/parseApiResponse";

const getOrder = async (
  params: QueryFunctionContext<[string, string], number>
) => {
  const orderId = params.queryKey[1];

  const db = getFirestore();
  const ref = doc(db, "orders", orderId);
  const snap = await getDoc(ref);
  const response = parseApiResponse(order, snap);

  return response;
};

export default getOrder;
