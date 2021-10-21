import { useHistory } from 'react-router-dom'
import { object } from 'yup'
import { CHECKOUT_PAYMENT } from 'constants/routes'
import { useSchema } from 'hooks'
import { useContext } from 'react'
import { checkoutContext, Shipping2 } from 'providers'

export type FormValues = Shipping2

const useForm = () => {
  const history = useHistory()

  const { getSchema } = useSchema()

  const { checkout, setCheckout } = useContext(checkoutContext)

  const onSubmitForm = (form: FormValues) => {
    setCheckout((prev) => ({
      ...prev,
      shipping2: form
    }))
    history.push(CHECKOUT_PAYMENT)
  }

  const initialValues: FormValues = {
    street: checkout.shipping2?.street ?? '',
    streetNo: checkout.shipping2?.streetNo ?? '',
    addressCdn: checkout.shipping2?.addressCdn ?? '',
    postCode: checkout.shipping2?.postCode ?? '',
    city: checkout.shipping2?.city ?? ''
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
