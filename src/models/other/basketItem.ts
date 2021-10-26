import { number, object, string, TypeOf } from 'zod'

const basketItem = object({
  id: string(),
  quantity: number(),
  price: number()
})

export type BasketItem = TypeOf<typeof basketItem>

export default basketItem
