import { useNavigate } from 'react-router-dom'
import { object } from 'yup'
import { CHECKOUT_PAYMENT } from 'constants/routes'
import { useFormSchema } from 'hooks'
import { useContext } from 'react'
import { checkoutContext } from 'providers'
import { DeliveryType, Shipping } from 'models'

export type FormValues = {
  delivery_type: string | null
  shipping: Shipping
}

const useForm = () => {
  const navigate = useNavigate()
  const { getSchema } = useFormSchema()
  const { checkout, setCheckout } = useContext(checkoutContext)

  const onSubmitForm = (
    form: FormValues,
    deliveryTypes: DeliveryType[],
    sameAddressAsInvoice: boolean
  ) => {
    const selectedDeliveryType = deliveryTypes.find(
      (method) => method.id === form.delivery_type
    )

    if (selectedDeliveryType) {
      setCheckout((prev) => ({
        ...prev,
        delivery_type: selectedDeliveryType.id,
        same_address_as_invoice: selectedDeliveryType.requires_address
          ? sameAddressAsInvoice
          : null,
        delivery_type_allows_cash_payment:
          selectedDeliveryType.allows_cash_payment,
        total: {
          ...prev.total,
          delivery: selectedDeliveryType.price
        },
        shipping: selectedDeliveryType.requires_address ? form.shipping : null
      }))
    }

    navigate(CHECKOUT_PAYMENT)
  }

  const initialValues: FormValues = {
    delivery_type: checkout.delivery_type ?? '',
    shipping: {
      street_address:
        checkout.shipping?.street_address ??
        checkout.contact_details?.street_address ??
        '',
      post_code:
        checkout.shipping?.post_code ??
        checkout.contact_details?.post_code ??
        '',
      city: checkout.shipping?.city ?? checkout.contact_details?.city ?? '',
      country:
        checkout.shipping?.country ?? checkout.contact_details?.country ?? ''
    }
  }

  const schema = object({
    delivery_type: getSchema('DELIVERY_TYPE'),
    shipping: object().shape({
      street_address: getSchema('STREET_ADDRESS'),
      post_code: getSchema('POST_CODE'),
      city: getSchema('CITY')
    })
  })

  return {
    onSubmitForm,
    initialValues,
    schema
  }
}

export default useForm
