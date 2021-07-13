import { QueryFunctionContext } from "react-query";
import { doc, getDoc, getFirestore } from "@firebase/firestore";
import user from "models/user";
import parseApiResponse from "utils/parseApiResponse";

const getUser = async (
  params: QueryFunctionContext<[string, string], number>
) => {
  const userId = params.queryKey[1];

  const db = getFirestore();
  const usersRef = doc(db, "users", userId);
  const usersSnap = await getDoc(usersRef);
  const response = parseApiResponse(user, usersSnap);

  return response;
};

export default getUser;
