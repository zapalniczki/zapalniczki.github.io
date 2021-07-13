import { number, object, string, TypeOf, enum as zenum } from "zod";

const orderStatus = zenum(["OPEN", "CLOSED"]);

const userOrder = object({
  _id: string().optional(),
  createdOn: string(),
  status: orderStatus,
  total: number(),
  updatedOn: string(),
});

export type UserOrder = TypeOf<typeof userOrder>;

export default userOrder;
