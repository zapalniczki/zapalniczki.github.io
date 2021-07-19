import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { Order } from "models/order";
import round from "lodash/round";
import getNow from "utils/getNow";

export type FormValues = Order;

const editOrder = async (params: FormValues) => {
  const orderId = params._id;

  if (!orderId) throw new Error("error");

  const db = getFirestore();

  const now = getNow();
  const total = getOrderTotal(params._products) ?? 0;

  // Update order to /orders
  const orderPayload: Omit<Order, "createdOn"> = {
    status: params.status,
    total,
    userId: params.userId,
    updatedOn: now,
    notes: params.notes,
  };

  const ordersRef = doc(db, "orders", orderId);
  updateDoc(ordersRef, orderPayload);

  // Remove old products
  const oldProductsRef = collection(db, "orders", orderId, "products");
  const oldProducts = await getDocs(oldProductsRef);

  oldProducts.forEach((product) => {
    const productRef = doc(db, "orders", orderId, "products", product.id);
    deleteDoc(productRef);
  });

  // Update products to /orders/XXX/products
  params._products?.forEach(async (product) => {
    const productsRef = doc(db, "orders", orderId, "products", product._id);

    const { _id, ...productWidthOutId } = product;
    await setDoc(productsRef, productWidthOutId);
  });

  // Update order to /user/XXX/orders/XXX
  const userOrdersRef = doc(db, "users", params.userId, "orders", orderId);
  const userOrderPayload = {
    total,
    status: params.status,
    updatedOn: now,
  };

  await updateDoc(userOrdersRef, userOrderPayload);
};

const getOrderTotal = (products: FormValues["_products"]) =>
  round(
    products
      ?.map((product) => product.price * product.quantity)
      .reduce((prev, curr) => prev + curr) ?? 0,
    2
  );

export default editOrder;
