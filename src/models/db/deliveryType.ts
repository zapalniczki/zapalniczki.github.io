import { string, number, boolean, object, TypeOf } from 'zod'

const deliveryType = object({
  created_at: string(),
  frontend_icon_name: string().nullable(),
  id: string(),
  is_enabled: boolean().nullable(),
  label: string(),
  price: number(),
  requires_address: boolean().nullable(),
  time: string(),
  updated_at: string()
})

export type DeliveryType = TypeOf<typeof deliveryType>
