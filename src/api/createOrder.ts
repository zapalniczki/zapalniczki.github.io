import {
  collection,
  addDoc,
  getFirestore,
  doc,
  setDoc,
} from "firebase/firestore";
import { Order } from "models/order";
import round from "lodash/round";
import { UserOrder } from "models/userOrder";
import getNow from "utils/getNow";

export type FormValues = Order;

const addOrder = async (params: FormValues) => {
  const db = getFirestore();

  const now = getNow();
  const total = getOrderTotal(params._products) ?? 0;

  // Add order to /orders
  const orderPayload: Order = {
    status: params.status,
    total,
    userId: params.userId,
    createdOn: now,
    updatedOn: now,
    notes: params.notes,
  };

  const ordersRef = collection(db, "orders");
  const orderId = await addDoc(ordersRef, orderPayload);

  // Add products to /orders/XXX/products
  params._products?.forEach(async (product) => {
    const productsRef = doc(db, "orders", orderId.id, "products", product._id);

    const { _id, ...productWidthOutId } = product;
    await setDoc(productsRef, productWidthOutId);
  });

  // Add order to /user/XXX/orders/XXX
  const userOrdersRef = doc(db, "users", params.userId, "orders", orderId.id);
  const userOrderPayload: UserOrder = {
    total,
    status: params.status,
    createdOn: now,
    updatedOn: now,
  };

  await setDoc(userOrdersRef, userOrderPayload);

  alert("success!");
};

const getOrderTotal = (products: FormValues["_products"]) => {
  return round(
    products
      ?.map((product) => product.price * product.quantity)
      .reduce((prev, curr) => prev + curr) ?? 0,
    2
  );
};

export default addOrder;
