import { object, string, TypeOf } from "zod";

const authorization = object({
  login: string(),
  password: string(),
});

export type Authorization = TypeOf<typeof authorization>;

const user = object({
  _id: string(),
  authorization,
  contact: object({
    email: string(),
    phone_numer: string(),
  }),

  address: object({
    name: string(),
    street: string(),
    post_code: string(),
    city: string(),
    country: string(),
  }),

  billing_address: object({
    name: string(),
    street: string(),
    post_code: string(),
    city: string(),
    country: string(),
  }),
});

export type User = TypeOf<typeof user>;

export default user;
