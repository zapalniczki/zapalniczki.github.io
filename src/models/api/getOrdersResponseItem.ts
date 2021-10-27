import { array, TypeOf } from 'zod'
import { deliveryType, order } from 'models'
import { user } from 'models'
import { orderItem } from 'models'

const getOrdersResponseItem = order
  .pick({
    id: true,
    updated_at: true,
    created_at: true,
    total: true,
    status: true
  })
  .extend({
    customerEmail: user.pick({ email: true }),
    customerName: user.pick({ full_name: true }),
    customerPhone: user.pick({ phone: true }),
    deliveryType: deliveryType.pick({ label: true }),
    isCompany: user.pick({ is_company: true }),
    products: array(orderItem.pick({ id: true, quantity: true }))
  })

export type GetOrderResponseItem = TypeOf<typeof getOrdersResponseItem>

export default getOrdersResponseItem