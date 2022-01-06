import { array, TypeOf } from 'zod'
import {
  deliveryType,
  icon,
  label,
  mold,
  order,
  orderItem,
  parcel,
  product,
  user
} from '../db'

const getOrdersResponseItem = order
  .pick({
    id: true,
    updated_at: true,
    created_at: true,
    total: true,
    status: true,
    is_test: true
  })
  .extend({
    customerEmail: user.pick({ email: true }),
    customerName: user.pick({ full_name: true }),
    customerPhone: user.pick({ phone: true }),
    deliveryType: deliveryType.pick({ label: true }),
    products: array(
      orderItem
        .pick({
          id: true,
          quantity: true
        })
        .extend({
          product: product.pick({}).extend({
            mold: mold.pick({
              status: true
            }),
            label: label.pick({
              label_pl: true
            }),
            icon: icon.pick({
              label_pl: true
            })
          })
        })
    ),
    parcel: parcel
      .pick({
        ref: true,
        link: true,
        id: true
      })
      .nullable()
  })

export type GetOrdersResponseItem = TypeOf<typeof getOrdersResponseItem>

export default getOrdersResponseItem
