import {
  addAddress,
  addOrder,
  addOrderItem,
  addUser,
  editVoucher,
  getProductsById,
  triggerSendEmail
} from 'api'
import { CHECKOUT_RESULT } from 'constants/routes'
import { useIsDev, useSchema } from 'hooks'
import { add, multiply } from 'lodash'
import { MoldStatus, Order, PaymentType, Voucher } from 'models'
import { checkoutContext, initState, loaderContext } from 'providers'
import { useContext } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router-dom'
import { object } from 'yup'

export type FormValues = {
  payment_type: PaymentType['id']
  voucher_id: Voucher['id']
}

const useForm = () => {
  const history = useHistory()
  const { getSchema } = useSchema()
  const isDev = useIsDev()

  const { basket, checkout, setCheckout } = useContext(checkoutContext)
  const { hide, show } = useContext(loaderContext)

  const { mutateAsync: mutateAddAddress } = useMutation(addAddress)
  const { mutateAsync: mutateAddUser } = useMutation(addUser)
  const { mutateAsync: mutateAddOrder } = useMutation(addOrder)
  const { mutateAsync: mutateAddOrderItem } = useMutation(addOrderItem)
  const { mutateAsync: mutateTriggerSendEmail } = useMutation(triggerSendEmail)
  const { mutateAsync: mutateGetProductsById } = useMutation(getProductsById)
  const { mutateAsync: mutateEditVoucher } = useMutation(editVoucher)

  const onSubmit = async (form: FormValues) => {
    show()

    let voucher_id: Order['voucher_id'] = null
    if (form.voucher_id) {
      const { id } = await mutateEditVoucher({
        id: form.voucher_id,
        is_used: true
      })

      voucher_id = id
    }

    const { id: address_id } = await mutateAddAddress({
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
    } = await mutateAddUser({
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

    const { id: orderId } = await mutateAddOrder({
      delivery_type: deliveryType,
      payment_type: paymentType,
      total:
        add(
          sumArray(
            checkout.basket.map((product) =>
              multiply(product.price, product.quantity)
            )
          ),
          checkout.total.delivery
        ) ?? 0,
      shipping_id,
      user_id,
      status: 'OPEN',
      voucher_id
    })

    const products = basket.map((product) => ({
      product_id: product.id,
      order_id: orderId,
      quantity: product.quantity,
      price: product.price
    }))

    await mutateAddOrderItem(products)

    const productIds = products.map((product) => product.product_id)
    const productsData = await mutateGetProductsById(productIds)
    const productionTime = calculateProductionTime(
      productsData.map((product) => product.mold.status)
    )

    const locationState: CheckoutResultLocationState = {
      orderID: orderId,
      productionTime
    }

    if (!isDev) {
      mutateTriggerSendEmail({
        to: email,
        type: {
          key: 'NEW_ORDER',
          content: {
            name: full_name,
            order_id: orderId,
            phone: phone,
            is_long: productionTime === 'LONG'
          }
        }
      })
    }

    setCheckout(initState)
    hide()

    history.push(CHECKOUT_RESULT, locationState)
  }

  const initialValues: FormValues = {
    payment_type: checkout.payment_type ?? '',
    voucher_id: checkout.voucher_id ?? ''
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

export type CheckoutResultLocationState = {
  orderID: string
  productionTime: 'LONG' | 'SHORT'
}

export default useForm

const calculateProductionTime = (
  statuses: MoldStatus[]
): CheckoutResultLocationState['productionTime'] => {
  if (statuses.includes('UNDONE')) {
    return 'LONG'
  }

  return 'SHORT'
}

export const sumArray = (numbers: number[]) =>
  numbers.reduce((acc, curr) => add(acc, curr), 0)
