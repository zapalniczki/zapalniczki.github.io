import { TypeOf, string, object, number } from "zod";

const product = object({
  description: string(),
  name: string(),
  _id: string(),
  price: number(),
  picture_url: string(),
});

export type Product = TypeOf<typeof product>;

export default product;
