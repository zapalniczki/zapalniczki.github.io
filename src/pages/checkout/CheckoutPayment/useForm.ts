import { useHistory } from 'react-router-dom'

import { object } from 'yup'
import { useSchema } from 'hooks'
import { CHECKOUT_RESULT } from 'constants/routes'
import { useContext } from 'react'
import { checkoutContext, initState } from 'providers'
import { useMutation } from 'react-query'
import { AddOrderPayload, addOrder, useTriggerSendEmail } from 'api'
import { basketContext } from 'providers'

import { loaderContext } from 'providers'
import { PaymentType } from 'models'

export type FormValues = {
  payment_type: PaymentType['id']
}

const useForm = () => {
  const history = useHistory()
  const { checkout, setCheckout } = useContext(checkoutContext)
  const { setBasket } = useContext(basketContext)

  const { hide, show } = useContext(loaderContext)

  const { getSchema } = useSchema()

  const { isLoading, mutateAsync: mutateAddOrderSupabase } =
    useMutation(addOrder)

  const triggerSendEmail = useTriggerSendEmail()

  const onSubmit = async (form: FormValues) => {
    show()

    const order: AddOrderPayload = {
      email: checkout.contact_details?.email ?? '',
      deliveryType: checkout.delivery_type ?? '',
      paymentType: form.payment_type ?? '',
      total: checkout.total ?? 0,
      phone: checkout.contact_details?.phone ?? '',
      full_name: checkout.contact_details?.full_name ?? '',
      products: checkout.products || [],
      nip: checkout.contact_details?.nip ? checkout.contact_details.nip : null,
      is_company: checkout.contact_details?.is_company ?? false,
      address: {
        street: checkout.contact_details?.street ?? '',
        street_nr: checkout.contact_details?.street_nr ?? '',
        address_cdn: checkout.contact_details?.address_cdn ?? '',
        post_code: checkout.contact_details?.post_code ?? '',
        city: checkout.contact_details?.city ?? ''
      },
      shipping: checkout.shipping || null
    }

    const orderId = await mutateAddOrderSupabase(order)
    const locationState: CheckoutResultLocationState = {
      orderID: orderId
    }

    triggerSendEmail({
      to: order.email,
      type: {
        key: 'NEW_ORDER',
        content: {
          name: order.full_name,
          order_id: orderId,
          phone: order.phone
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
    schema,
    isLoading
  }
}

export type CheckoutResultLocationState = { orderID: string }

export default useForm
