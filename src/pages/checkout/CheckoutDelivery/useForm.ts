import { useHistory } from 'react-router-dom'
import { string, object } from 'yup'
import { CHECKOUT_PAYMENT, CHECKOUT_SHIPPING } from 'constants/routes'
import { useTranslation } from 'hooks'
import { useContext } from 'react'
import { checkoutContext } from 'providers'
import add from 'lodash.add'
import { DeliveryType } from 'models'

export type FormValues = {
  deliveryType: string | null
}

const useForm = () => {
  const { t } = useTranslation('CHECKOUT_DELIVERY')
  const history = useHistory()

  const { checkout, setCheckout } = useContext(checkoutContext)

  const onSubmitForm = (form: FormValues, deliveryTypes: DeliveryType[]) => {
    const selectedDeliveryType = deliveryTypes.find(
      (method) => method.id === form.deliveryType
    )

    if (selectedDeliveryType) {
      setCheckout((prev) => ({
        ...prev,
        delivery_type: selectedDeliveryType.id,
        total: add(prev.total, selectedDeliveryType.price)
      }))
    }

    if (selectedDeliveryType?.requires_address) {
      history.push(CHECKOUT_SHIPPING)
    } else {
      history.push(CHECKOUT_PAYMENT)
    }
  }

  const initialValues: FormValues = {
    deliveryType: checkout.delivery_type ?? ''
  }

  const schema = object().shape({
    deliveryType: string().required(t('form.deliveryType.validations.required'))
  })

  return {
    onSubmitForm,
    initialValues,
    schema
  }
}

export default useForm
