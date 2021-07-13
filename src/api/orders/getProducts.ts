import { collection, getDocs, getFirestore } from "firebase/firestore";
import getCollection from "utils/getCollection";
import product from "models/product";

const getProducts = async () => {
  const db = getFirestore();

  const ref = collection(db, "products");
  const snapshot = await getDocs(ref);
  const products = getCollection(snapshot, product);

  return products;
};

export default getProducts;
