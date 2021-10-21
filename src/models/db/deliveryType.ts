import { string, number, boolean, object, TypeOf } from 'zod'

const deliveryType = object({
  created_at: string(),
  frontend_icon_name: string().nullable(),
  id: string(),
  is_enabled: boolean(),
  label: string(),
  price: number(),
  requires_address: boolean(),
  time: string(),
  updated_at: string()
})

export type DeliveryType = TypeOf<typeof deliveryType>

export default deliveryType
