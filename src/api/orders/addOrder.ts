import { ORDER_TABLE } from 'constants/db_tables'
import {
  Address,
  DeliveryType,
  Order,
  OrderItem,
  PaymentType,
  User
} from 'models'
import supabase from 'supabase'

export type AddOrderPayload = Pick<
  User,
  'is_company' | 'email' | 'full_name' | 'phone' | 'nip'
> & {
  address: Omit<Address, 'id' | 'created_at' | 'updated_at'>
  deliveryType: DeliveryType['id']
  paymentType: PaymentType['id']
  products: Pick<OrderItem, 'id' | 'quantity'>[]
  shipping: Omit<Address, 'id' | 'created_at' | 'updated_at'>
  total: Order['total']
}

export const addOrder = async (payload: AddOrderPayload) => {
  // ADDRESS
  const { data: address, error: addressError } = await supabase
    .from<Address>('address')
    .upsert({
      street: payload.address.street,
      street_nr: payload.address.street_nr,
      address_cdn: payload.address.address_cdn,
      post_code: payload.address.post_code,
      city: payload.address.city
    })
    .single()

  if (addressError) {
    throw new Error(addressError.message)
  }

  if (!address) {
    throw new Error('addOrderSupabase/address error')
  }

  // SHIPPING
  const { data: shipping, error: shippingError } = await supabase
    .from<Address>('address')
    .upsert({
      street: payload.address.street,
      street_nr: payload.address.street_nr,
      address_cdn: payload.address.address_cdn,
      post_code: payload.address.post_code,
      city: payload.address.city
    })
    .single()

  if (shippingError) {
    throw new Error(shippingError.message)
  }

  if (!shipping) {
    throw new Error('addOrderSupabase/shipping error')
  }

  // USER

  type AddUserResponse = Omit<User, 'updated_at' | 'created_at'>

  const { data: userData, error: userError } = await supabase
    .from<AddUserResponse>('user')
    .insert([
      {
        is_company: payload.is_company,
        full_name: payload.full_name,
        address_id: address.id,
        shipping_id: shipping.id,
        nip: payload.nip,
        phone: payload.phone,
        email: payload.email,
        preferred_payment: payload.paymentType,
        preferred_delivery: payload.deliveryType
      }
    ])
    .single()

  if (userError) {
    throw new Error(userError.message)
  }

  if (!userData) {
    throw new Error('addOrderSupabase/user error')
  }

  // ORDER
  const { data: order, error: orderError } = await supabase
    .from<Order>(ORDER_TABLE)
    .insert([
      {
        status: 'OPEN',
        user_id: userData.id,
        shipping_id: shipping.id,
        delivery_type: payload.deliveryType,
        payment_type: payload.paymentType,
        total: payload.total
      }
    ])
    .single()

  if (orderError) {
    throw new Error(orderError.message)
  }

  if (!order) {
    throw new Error('addOrderSupabase/order error')
  }

  // ORDER_ITEM
  const { data: orderItem, error: orderItemError } = await supabase
    .from<OrderItem>('order_item')
    .insert(
      payload.products.map((product) => ({
        product_id: product.id,
        quantity: product.quantity,
        order_id: order.id
      }))
    )

  if (orderItemError) {
    throw new Error(orderItemError.message)
  }

  if (!orderItem) {
    throw new Error('addOrderSupabase/orderItem error')
  }

  return order.id
}
