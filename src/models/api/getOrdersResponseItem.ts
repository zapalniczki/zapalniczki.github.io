import { array, object, TypeOf } from 'zod'
import { deliveryType, mold, order, orderItem, parcel } from 'models'
import { user } from 'models'

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
    products: array(
      orderItem.pick({
        id: true,
        quantity: true,
        product: object({
          mold: mold.pick({
            status: true
          })
        })
      })
    ),
    molds: array(orderItem.pick({ id: true })),
    parcel: parcel
      .pick({
        ref: true,
        link: true
      })
      .nullable()
  })

export type GetOrdersResponseItem = TypeOf<typeof getOrdersResponseItem>

export default getOrdersResponseItem
