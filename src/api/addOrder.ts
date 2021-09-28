import { Address } from 'models/supabaseOrder'
import supabase from 'supabase'
import { Email, Phone } from 'Types'

export type AddOrderPayload = {
  address: Address
  shipping: Address

  phone: Phone
  email: Email

  deliveryType: string
  paymentType: string
  total: number
  products: { id: string; quantity: number }[]
  fullname: string
  isCompany?: boolean
}

export const addOrder = async (payload: AddOrderPayload) => {
  // ADDRESS
  const { data: address, error: addressError } = await supabase
    .from<AddressDb>('address')
    .upsert({
      street: payload.address.street,
      street_no: payload.address.streetNo,
      adress_cdn: payload.address.adressCdn,
      post_code: payload.address.postCode,
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
    .from<AddressDb>('address')
    .upsert({
      street: payload.address.street,
      street_no: payload.address.streetNo,
      adress_cdn: payload.address.adressCdn,
      post_code: payload.address.postCode,
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
  const { data: userData, error: userError } = await supabase
    .from<User>('user')
    .insert([
      {
        is_company: payload.isCompany,
        full_name: payload.fullname,
        address_id: address.id,
        shipping_id: shipping.id,
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
    .from<Order>('order')
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

type AddressDb = {
  street: string
  street_no: string
  adress_cdn: string
  post_code: string
  city: string
  id: string
}

type User = {
  is_company?: boolean
  full_name: string
  address_id: string
  shipping_id: string
  phone: string
  email: string
  preferred_payment: string
  preferred_delivery: string
  id: string
}

type Order = {
  id: string
  status: 'OPEN'
  user_id: string
  shipping_id: string
  delivery_type: string
  payment_type: string
  total: number
}

type OrderItem = {
  id: string
  product_id: string
  order_id: string
  quantity: number
}
