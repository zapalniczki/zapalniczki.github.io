import { DeliveryType, ROUTES } from 'braty-common'
import { useFormSchema } from 'hooks'
import { Shipping } from 'models'
import { checkoutContext } from 'providers'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { object, string } from 'yup'

export type FormValues = {
  delivery_type: string | null
  shipping: Shipping
}

const useForm = () => {
  const navigate = useNavigate()
  const { getSchema: getNativeSchema } = useFormSchema()
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
          // selectedDeliveryType.allows_cash_payment,
          true,
        total: {
          ...prev.total,
          delivery: selectedDeliveryType.price
        },
        shipping: selectedDeliveryType.requires_address ? form.shipping : null
      }))
    }

    navigate(ROUTES.CHECKOUT_PAYMENT)
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
        checkout.shipping?.country ??
        checkout.contact_details?.country ??
        'POLAND'
    }
  }

  const schema = object({
    delivery_type: getNativeSchema('DELIVERY_TYPE'),
    shipping: object().shape({
      city: getNativeSchema('CITY'),
      country: getNativeSchema('COUNTRY'),
      street_address: getNativeSchema('STREET_ADDRESS')
    })
  }).shape({
    post_code: string()
      .when('country', {
        is: 'POLAND',
        then: getNativeSchema('POST_CODE_PL')
      })
      .when('country', {
        is: 'UNITED KINGDOM',
        then: getNativeSchema('POST_CODE_UK')
      })
      .when('country', {
        is: 'GERMANY',
        then: getNativeSchema('POST_CODE_DE')
      })
  })

  return {
    onSubmitForm,
    initialValues,
    schema
  }
}

export default useForm
