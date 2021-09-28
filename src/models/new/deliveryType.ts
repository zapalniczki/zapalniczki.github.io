import { string, number, boolean, object, TypeOf } from 'zod'

const deliveryType = object({
  id: string(),
  label: string(),
  price: number(),
  time: string(),
  requires_address: boolean().nullable(),
  isAvailable: boolean().nullable(),
  frontend_icon_name: string()
})

export type DeliveryType = TypeOf<typeof deliveryType>

export default deliveryType
