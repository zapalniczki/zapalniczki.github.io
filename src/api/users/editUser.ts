import sliceIdFromPayload from "api/utils/sliceIdFromPayload";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { User } from "models/user";

const editUser = async (params: User) => {
  const id = params._id;

  const db = getFirestore();
  const userRef = doc(db, "users", id);

  const payload = sliceIdFromPayload(params);
  updateDoc(userRef, payload);
};

export default editUser;
