import { getProductsById, rpcAddOrder, triggerSendEmail } from 'api'
import { MoldStatus, PaymentType, ROUTES, Voucher } from 'braty-common'
import {
  useFormSchema,
  useFormSubmit,
  useNoEmail,
  useTest,
  useTranslation
} from 'hooks'
import multiply from 'lodash/multiply'
import { checkoutContext, initTotalState } from 'providers'
import { useContext } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { getHstoreFromObject, sumArray } from 'utils'
import { object } from 'yup'
import { CheckoutResultLocationState } from '../CheckoutResult'

export type FormValues = {
  payment_type: PaymentType['id']
  voucher_id: Voucher['id']
}

const useForm = (paymentTypes: PaymentType[]) => {
  const { language } = useTranslation('COMMON')
  const navigate = useNavigate()
  const { getSchema } = useFormSchema()
  const isNoEmail = useNoEmail()
  const isTest = useTest()

  const { basket, checkout, clearBasket, setCheckout } =
    useContext(checkoutContext)

  const useSubmit = () => {
    const { mutateAsync: mutateTriggerSendEmail } =
      useMutation(triggerSendEmail)
    const { mutateAsync: mutateGetProductsById } = useMutation(getProductsById)
    const { mutateAsync: mutateAddOrderFunction } = useMutation(rpcAddOrder)

    return useFormSubmit(async (values: FormValues) => {
      const basketTotalsPl = basket.map((product) =>
        multiply(product.price_pl, product.quantity)
      )
      const basketTotalsEn = basket.map((product) =>
        multiply(product.price_en, product.quantity)
      )
      const productsPricePl = sumArray(basketTotalsPl)
      const productsPriceEn = sumArray(basketTotalsEn)

      const productIds = basket.map((product) => product.id)
      const productsData = await mutateGetProductsById(productIds)
      const productionTime = calculateProductionTime(
        productsData.map((product) => product.mold.status)
      )

      const orderWillTakeLong = productionTime === 'LONG'

      const email = checkout.contact_details?.email ?? ''
      const phone = checkout.contact_details?.phone ?? ''
      const fullName = checkout.contact_details?.full_name ?? ''

      const orderId = await mutateAddOrderFunction({
        voucher_id: values.voucher_id || null,

        address: getHstoreFromObject({
          street_address: checkout.contact_details?.street_address ?? '',
          post_code: checkout.contact_details?.post_code ?? '',
          city: checkout.contact_details?.city ?? '',
          country: checkout.contact_details?.country ?? ''
        }),

        shipping: checkout.shipping
          ? getHstoreFromObject({
              street_address: checkout.shipping.street_address,
              post_code: checkout.shipping.post_code,
              city: checkout.shipping.city,
              country: checkout.shipping.country
            })
          : null,

        same_address_as_invoice: checkout.same_address_as_invoice,
        payment_type: values.payment_type ?? '',
        delivery_type: checkout.delivery_type ?? '',

        contact_details: getHstoreFromObject({
          email,
          phone,
          full_name: fullName,
          nip: checkout.contact_details?.nip
            ? checkout.contact_details.nip
            : null
        }),

        products_price_pl: productsPricePl,
        products_price_en: productsPriceEn,

        products: basket.map((basketItem) => ({
          product_id: basketItem.id,
          quantity: basketItem.quantity
        })),

        order_will_take_long: orderWillTakeLong,

        is_test: isTest
      })

      const locationState: CheckoutResultLocationState = {
        orderId,
        productionTime
      }

      if (!isNoEmail) {
        await mutateTriggerSendEmail({
          language,
          to: email,
          type: {
            key: 'NEW_ORDER',
            content: {
              name: fullName,
              order_id: orderId,
              phone,
              is_long: orderWillTakeLong
            }
          }
        })
      }

      const selectedPaymentType = paymentTypes.find(
        (method) => method.id === values.payment_type
      )

      if (!selectedPaymentType) {
        throw new Error('No selectedPaymentType')
      }

      navigate(ROUTES.CHECKOUT_RESULT, { state: locationState })
      clearBasket()
      setCheckout((prev) => ({
        ...prev,
        payment_type: selectedPaymentType.id,
        total: initTotalState,
        voucher: null,
        voucher_id: null,
        processStarted: false
      }))
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

export default useForm

const calculateProductionTime = (
  statuses: MoldStatus[]
): CheckoutResultLocationState['productionTime'] => {
  if (statuses.includes('UNDONE')) {
    return 'LONG'
  }

  return 'SHORT'
}
