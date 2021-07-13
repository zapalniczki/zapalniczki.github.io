import { object, string, TypeOf, number, enum as zenum, array } from "zod";
import orderProduct from "./orderProduct";

export const order = object({
  _id: string().optional(),
  _products: array(orderProduct).optional(),
  status: zenum(["OPEN", "CLOSED"]),
  total: number(),
  createdOn: string(),
  userId: string(),
  notes: string(),
  updatedOn: string(),
});

export type Order = TypeOf<typeof order>;

export default order;
