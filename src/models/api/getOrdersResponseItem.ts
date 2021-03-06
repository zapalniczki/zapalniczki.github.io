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
  customer
} from 'braty-common'

const getOrdersResponseItem = order
  .pick({
    id: true,
    updated_at: true,
    created_at: true,
    total_pl: true,
    total_en: true,
    status: true,
    is_test: true
  })
  .extend({
    customerEmail: customer.pick({ email: true }),
    customerName: customer.pick({ full_name: true }),
    customerPhone: customer.pick({ phone: true }),
    deliveryType: deliveryType.pick({
      label_en: true,
      label_pl: true
    }),
    products: array(
      orderItem
        .pick({
          id: true,
          quantity: true
        })
        .extend({
          product: product
            .pick({
              name_en: true,
              name_pl: true
            })
            .extend({
              mold: mold.pick({
                status: true
              }),
              label: label.pick({
                key: true
              }),
              icon: icon.pick({
                label_pl: true,
                label_en: true
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
