import { useHistory } from 'react-router-dom'
import { object } from 'yup'
import { CHECKOUT_PAYMENT } from 'constants/routes'
import { useSchema } from 'hooks'
import { useContext } from 'react'
import { checkoutContext, Shipping } from 'providers'

export type FormValues = Shipping

const useForm = () => {
  const history = useHistory()

  const { getSchema } = useSchema()

  const { checkout, setCheckout } = useContext(checkoutContext)

  const onSubmitForm = (form: FormValues) => {
    setCheckout((prev) => ({
      ...prev,
      shipping: form
    }))
    history.push(CHECKOUT_PAYMENT)
  }

  const initialValues: FormValues = {
    street_address:
      checkout.shipping?.street_address ??
      checkout.contact_details?.street_address ??
      '',
    post_code:
      checkout.shipping?.post_code ?? checkout.contact_details?.post_code ?? '',
    city: checkout.shipping?.city ?? checkout.contact_details?.city ?? ''
  }

  const schema = object().shape({
    street_address: getSchema('STREET_ADDRESS'),
    post_code: getSchema('POST_CODE'),
    city: getSchema('CITY')
  })

  return {
    onSubmitForm,
    initialValues,
    schema
  }
}

export default useForm
