import { useHistory } from 'react-router-dom'
import { object } from 'yup'
import { CHECKOUT_PAYMENT, CHECKOUT_SHIPPING } from 'constants/routes'
import { useSchema } from 'hooks'
import { useContext } from 'react'
import { checkoutContext } from 'providers'
import add from 'lodash.add'
import { DeliveryType } from 'models'

export type FormValues = {
  delivery_type: string | null
}

const useForm = () => {
  const history = useHistory()

  const { getSchema } = useSchema()

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
        same_address_as_invoice: sameAddressAsInvoice,
        total: add(prev.total, selectedDeliveryType.price)
      }))
    }

    if (!sameAddressAsInvoice) {
      history.push(CHECKOUT_SHIPPING)
    } else {
      history.push(CHECKOUT_PAYMENT)
    }
  }

  const initialValues: FormValues = {
    delivery_type: checkout.delivery_type ?? ''
  }

  const schema = object({
    delivery_type: getSchema('DELIVERY_TYPE')
  })

  return {
    onSubmitForm,
    initialValues,
    schema
  }
}

export default useForm
