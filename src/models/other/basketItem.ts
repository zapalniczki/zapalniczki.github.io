import { number, string, TypeOf } from 'zod'
import { price } from 'braty-common'

const basketItem = price.extend({
  id: string(),
  quantity: number()
})

export type BasketItem = TypeOf<typeof basketItem>

export default basketItem
