import {
  addOrderItem,
  getProductsById,
  rpcAddOrder,
  triggerSendEmail
} from 'api'
import { MoldStatus, PaymentType, ROUTES, Voucher } from 'braty-common'
import { useAdmin, useDev, useFormSchema, useFormSubmit } from 'hooks'
import multiply from 'lodash/multiply'
import { checkoutContext, initState } from 'providers'
import { useContext } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { getHstoreFromObject, sumArray } from 'utils'
import { object } from 'yup'

export type FormValues = {
  payment_type: PaymentType['id']
  voucher_id: Voucher['id']
}

const useForm = () => {
  const navigate = useNavigate()
  const { getSchema } = useFormSchema()
  const isDev = useDev()
  const isAdmin = useAdmin()

  const { basket, checkout, setCheckout } = useContext(checkoutContext)

  const useSubmit = () => {
    const { mutateAsync: mutateAddOrderItem } = useMutation(addOrderItem)
    const { mutateAsync: mutateTriggerSendEmail } =
      useMutation(triggerSendEmail)
    const { mutateAsync: mutateGetProductsById } = useMutation(getProductsById)
    const { mutateAsync: mutateAddOrderFunction } = useMutation(rpcAddOrder)

    return useFormSubmit(async (values: FormValues) => {
      const productsPrice = sumArray(
        basket.map((product) => multiply(product.price, product.quantity))
      )

      const productIds = basket.map((product) => product.id)
      const productsData = await mutateGetProductsById(productIds)
      const productionTime = calculateProductionTime(
        productsData.map((product) => product.mold.status)
      )

      const orderWillTakeLong = productionTime === 'LONG'

      const email = checkout.contact_details?.email ?? ''
      const phone = checkout.contact_details?.phone ?? ''
      const fullName = checkout.contact_details?.full_name ?? ''

      const isTest = isAdmin || isDev

      const orderId = await mutateAddOrderFunction({
        voucher_id: values.voucher_id || null,

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
        payment_type: values.payment_type ?? '',
        delivery_type: checkout.delivery_type ?? '',

        contact_details: getHstoreFromObject({
          email: email,
          phone: phone,
          full_name: fullName,
          nip: checkout.contact_details?.nip
            ? checkout.contact_details.nip
            : null
        }),

        products_price: productsPrice,

        order_will_take_long: orderWillTakeLong,

        is_test: isTest
      })

      const products = basket.map((product) => ({
        product_id: product.id,
        order_id: orderId,
        quantity: product.quantity,
        price: product.price,
        is_test: isTest
      }))

      await mutateAddOrderItem(products)

      const locationState: CheckoutResultLocationState = {
        orderID: orderId,
        productionTime
      }

      if (!isDev) {
        await mutateTriggerSendEmail({
          to: email,
          type: {
            key: 'NEW_ORDER',
            content: {
              name: fullName,
              order_id: orderId,
              phone: phone,
              is_long: orderWillTakeLong
            }
          }
        })
      }

      navigate(ROUTES.CHECKOUT_RESULT, { state: locationState })
      setCheckout(initState)
    })
  }

  const onSubmit = useSubmit()

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
