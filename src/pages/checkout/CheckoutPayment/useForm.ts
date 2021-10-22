import {
  useAddAddress,
  useAddOrder,
  useAddOrderItem,
  useAddUser,
  useTriggerSendEmail
} from 'api'
import { CHECKOUT_RESULT } from 'constants/routes'
import { useSchema } from 'hooks'
import { PaymentType } from 'models'
import {
  basketContext,
  checkoutContext,
  initState,
  loaderContext
} from 'providers'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { object } from 'yup'

export type FormValues = {
  payment_type: PaymentType['id']
}

const useForm = () => {
  const history = useHistory()
  const { getSchema } = useSchema()

  const { checkout, setCheckout } = useContext(checkoutContext)
  const { setBasket } = useContext(basketContext)
  const { hide, show } = useContext(loaderContext)

  const addAddress = useAddAddress()
  const addUser = useAddUser()
  const addOrder = useAddOrder()
  const addOrderItem = useAddOrderItem()
  const triggerSendEmail = useTriggerSendEmail()

  const onSubmit = async (form: FormValues) => {
    show()

    const { id: address_id } = await addAddress({
      street_address: checkout.contact_details?.street_address ?? '',
      post_code: checkout.contact_details?.post_code ?? '',
      city: checkout.contact_details?.city ?? ''
    })

    let shipping_id: null | string = null
    const shipping = checkout.shipping || null
    if (shipping) {
      const shippingResponse = await addAddress(shipping)
      shipping_id = shippingResponse.id
    }

    const deliveryType = checkout.delivery_type ?? ''
    const paymentType = form.payment_type ?? ''

    const {
      email,
      full_name,
      id: user_id,
      phone
    } = await addUser({
      email: checkout.contact_details?.email ?? '',
      phone: checkout.contact_details?.phone ?? '',
      full_name: checkout.contact_details?.full_name ?? '',
      nip: checkout.contact_details?.nip ? checkout.contact_details.nip : null,
      is_company: checkout.contact_details?.is_company ?? false,
      address_id,
      shipping_id,
      preferred_delivery: deliveryType,
      preferred_payment: paymentType
    })

    const { id: orderId } = await addOrder({
      delivery_type: deliveryType,
      payment_type: paymentType,
      total: checkout.total ?? 0,
      shipping_id,
      user_id,
      status: 'OPEN'
    })

    const products = checkout?.products?.map((product) => ({
      product_id: product.id,
      order_id: orderId,
      quantity: product.quantity
    }))

    await addOrderItem(products || [])

    const locationState: CheckoutResultLocationState = {
      orderID: orderId
    }

    triggerSendEmail({
      to: email,
      type: {
        key: 'NEW_ORDER',
        content: {
          name: full_name,
          order_id: orderId,
          phone: phone
        }
      }
    })

    setCheckout(initState)
    setBasket([])
    hide()

    history.push(CHECKOUT_RESULT, locationState)
  }

  const initialValues: FormValues = {
    payment_type: checkout.payment_type ?? ''
  }

  const schema = object({
    payment_type: getSchema('PAYMENT_TYPE')
  })

  return {
    onSubmit,
    initialValues,
    schema
  }
}

export type CheckoutResultLocationState = { orderID: string }

export default useForm
