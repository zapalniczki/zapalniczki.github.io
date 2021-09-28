import { useHistory } from 'react-router-dom'
import { object, string } from 'yup'
import { CHECKOUT_PAYMENT } from 'constants/routes'
import { useTranslation } from 'hooks'
import { useContext } from 'react'
import { checkoutContext, Shipping2 } from 'providers/CheckoutProvider'

export type FormValues = Shipping2

const useForm = () => {
  const { t } = useTranslation('CHECKOUT_SHIPPING')
  const history = useHistory()

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
    street: string().required(t('form.street.validations.required')),
    streetNo: string().required(t('form.streetNr.validations.required')),
    addressCdn: string(),
    postCode: string()
      .trim()
      .matches(/^(\d{2})-(\d{3})$/, t('form.postCode.validations.matches'))
      .required(t('form.postCode.validations.required')),
    city: string().required(t('form.city.validations.required'))
  })

  return {
    onSubmitForm,
    initialValues,
    schema
  }
}

export default useForm
