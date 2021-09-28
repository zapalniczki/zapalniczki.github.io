import { useHistory } from 'react-router-dom'

import { string, object } from 'yup'
import { useTranslation } from 'hooks'
import { CHECKOUT_RESULT } from 'constants/routes'
import { useContext } from 'react'
import {
  checkoutContext,
  initState,
  PaymentType2
} from 'providers/CheckoutProvider'
import { useMutation } from 'react-query'
import { AddOrderPayload, addOrder, useTriggerNewOrder } from 'api'
import { basketContext } from 'providers/BasketProvider'

import { loaderContext } from 'providers/LoaderProvider'

export type FormValues = {
  paymentType: PaymentType2
}

const useFormSubmit = () => {
  const history = useHistory()
  const { t } = useTranslation('CHECKOUT_PAYMENT')
  const { checkout, setCheckout } = useContext(checkoutContext)
  const { setBasket } = useContext(basketContext)

  const { show, hide } = useContext(loaderContext)

  const { mutateAsync: mutateAddOrderSupabase, isLoading } =
    useMutation(addOrder)

  const triggerNewOrder = useTriggerNewOrder()

  const onSubmit = async (form: FormValues) => {
    show()
    const order: AddOrderPayload = {
      email: checkout.contactDetails2?.email ?? '',
      deliveryType: checkout.deliveryType2 ?? '',
      paymentType: form.paymentType ?? '',
      total: checkout.totalNew ?? 0,
      phone: checkout.contactDetails2?.phone ?? '',
      fullname: checkout.contactDetails2?.fullName ?? '',
      products: checkout.products2 || [],
      address: {
        street: checkout.contactDetails2?.street ?? '',
        street_no: checkout.contactDetails2?.streetNo ?? '',
        adress_cdn: checkout.contactDetails2?.addressCdn ?? '',
        post_code: checkout.contactDetails2?.postCode ?? '',
        city: checkout.contactDetails2?.city ?? ''
      },
      shipping: {
        street: checkout.shipping2?.street ?? '',
        street_no: checkout.shipping2?.streetNo ?? '',
        adress_cdn: checkout.shipping2?.addressCdn ?? '',
        post_code: checkout.shipping2?.postCode ?? '',
        city: checkout.shipping2?.city ?? ''
      }
    }

    const orderId = await mutateAddOrderSupabase(order)
    const locationState: CheckoutResultLocationState = {
      orderID: orderId
    }

    triggerNewOrder({
      order,
      order_id: orderId,
      to: order.email
    })

    setCheckout(initState)
    setBasket([])
    hide()

    history.push(CHECKOUT_RESULT, locationState)
  }

  const initialValues: FormValues = {
    paymentType: checkout.paymentType2 ?? ''
  }

  const schema = object().shape({
    paymentType: string().required(t('form.paymentType.validations.required'))
  })

  return {
    onSubmit,
    initialValues,
    schema,
    isLoading
  }
}

export type CheckoutResultLocationState = { orderID: string }

export default useFormSubmit
