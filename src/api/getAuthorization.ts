import {
  collection,
  query,
  where,
  getFirestore,
  getDocs,
} from "firebase/firestore";
import user, { Authorization } from "models/user";
import getCollection from "utils/getCollection";

const getAuthorization = async (params: Authorization) => {
  const { login, password } = params;

  const db = getFirestore();
  const ref = collection(db, "users");
  const q = query(
    ref,
    where("authorization.login", "==", login),
    where("authorization.password", "==", password)
  );

  const snapshot = await getDocs(q);
  const users = getCollection(snapshot, user);

  if (users.length === 1) {
    return users[0]._id;
  } else {
    throw new Error("Błąd autoryzacji");
  }
};

export default getAuthorization;
