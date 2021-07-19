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
    phone_number: string(),
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

export const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const phoneNumberRegex = /^\+48\d{9}$/;

export const postCodeRegex = /^\d{2}-\d{3}$/;
