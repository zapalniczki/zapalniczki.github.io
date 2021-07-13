import { TypeOf, number, string, object } from "zod";

const orderProduct = object({
  quantity: number().int(),
  _id: string(),
  price: number(),
  name: string(),
  total: number(),
});

export type OrderProduct = TypeOf<typeof orderProduct>;

export default orderProduct;
