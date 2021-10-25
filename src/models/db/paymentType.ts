import tableBase from './tableBase'
import { boolean, number, string, TypeOf } from 'zod'

const paymentType = tableBase.extend({
  label: string(),
  price: number(),
  time: string(),
  frontend_icon_name: string().nullable(),
  is_enabled: boolean().nullable()
})

export type PaymentType = TypeOf<typeof paymentType>

export default paymentType
