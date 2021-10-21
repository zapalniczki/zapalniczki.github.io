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
    street: checkout.shipping?.street ?? '',
    street_nr: checkout.shipping?.street_nr ?? '',
    address_cdn: checkout.shipping?.address_cdn ?? '',
    post_code: checkout.shipping?.post_code ?? '',
    city: checkout.shipping?.city ?? ''
  }

  const schema = object().shape({
    street: getSchema('STREET'),
    streetNo: getSchema('STREET_NR'),
    addressCdn: getSchema('ADDRESS_CDN'),
    postCode: getSchema('POST_CODE'),
    city: getSchema('CITY')
  })

  return {
    onSubmitForm,
    initialValues,
    schema
  }
}

export default useForm
