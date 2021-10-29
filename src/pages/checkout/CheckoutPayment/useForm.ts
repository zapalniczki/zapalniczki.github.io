import {
  rpcAddOrder,
  addOrderItem,
  getProductsById,
  triggerSendEmail
} from 'api'
import { CHECKOUT_RESULT } from 'constants/routes'
import { useIsDev, useSchema } from 'hooks'
import multiply from 'lodash/multiply'
import add from 'lodash/add'
import { MoldStatus, PaymentType, Voucher } from 'models'
import { checkoutContext, initState, loaderContext } from 'providers'
import { useContext } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router-dom'
import { getHstoreFromObject } from 'utils'
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

  const { mutateAsync: mutateAddOrderItem } = useMutation(addOrderItem)
  const { mutateAsync: mutateTriggerSendEmail } = useMutation(triggerSendEmail)
  const { mutateAsync: mutateGetProductsById } = useMutation(getProductsById)
  const { mutateAsync: mutateAddOrderFunction } = useMutation(rpcAddOrder)

  const onSubmit = async (form: FormValues) => {
    show()

    const productsPrice = sumArray(
      basket.map((product) => multiply(product.price, product.quantity))
    )

    const email = checkout.contact_details?.email ?? ''
    const phone = checkout.contact_details?.phone ?? ''
    const fullName = checkout.contact_details?.full_name ?? ''

    const orderId = await mutateAddOrderFunction({
      voucher_id: form.voucher_id || null,

      address: getHstoreFromObject({
        street_address: checkout.contact_details?.street_address ?? '',
        post_code: checkout.contact_details?.post_code ?? '',
        city: checkout.contact_details?.city ?? ''
      }),

      shipping: checkout.shipping
        ? getHstoreFromObject({
            street_address: checkout.shipping.street_address,
            post_code: checkout.shipping.post_code,
            city: checkout.shipping.city
          })
        : null,

      same_address_as_invoice: checkout.same_address_as_invoice,
      payment_type: form.payment_type ?? '',
      delivery_type: checkout.delivery_type ?? '',

      contact_details: getHstoreFromObject({
        email: email,
        phone: phone,
        full_name: fullName,
        nip: checkout.contact_details?.nip
          ? checkout.contact_details.nip
          : null,
        is_company: checkout.contact_details?.is_company ?? false
      }),

      products_price: productsPrice
    })

    console.log(orderId)

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
            name: fullName,
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
