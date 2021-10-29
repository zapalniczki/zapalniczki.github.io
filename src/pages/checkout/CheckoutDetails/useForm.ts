import { useHistory } from 'react-router-dom'
import { object } from 'yup'
import { useSchema } from 'hooks'
import { CHECKOUT_DELIVERY } from 'constants/routes'
import { useContext } from 'react'
import { checkoutContext } from 'providers'
import { ContactDetails } from 'models'

export type FormValues = ContactDetails

const useForm = () => {
  const { getSchema: getNativeSchema } = useSchema()

  const history = useHistory()
  const { checkout, setCheckout } = useContext(checkoutContext)

  const onSubmitForm = (form: FormValues) => {
    setCheckout((prev) => ({
      ...prev,
      contact_details: {
        ...form
      }
    }))

    history.push(CHECKOUT_DELIVERY)
  }

  const initialValues: FormValues = {
    full_name: checkout.contact_details?.full_name ?? '',
    nip: checkout.contact_details?.nip ?? '',
    street_address: checkout.contact_details?.street_address ?? '',
    post_code: checkout.contact_details?.post_code ?? '',
    city: checkout.contact_details?.city ?? '',
    email: checkout.contact_details?.email ?? '',
    phone: checkout.contact_details?.phone ?? ''
  }

  const getSchema = (isCompany: boolean) => {
    const base = object().shape({
      full_name: getNativeSchema('FULL_NAME'),
      street_address: getNativeSchema('STREET_ADDRESS'),
      post_code: getNativeSchema('POST_CODE'),
      city: getNativeSchema('CITY'),
      email: getNativeSchema('EMAIL'),
      phone: getNativeSchema('PHONE')
    })

    const companySchema = base.shape({
      nip: getNativeSchema('NIP')
    })

    return isCompany ? companySchema : base
  }

  return {
    onSubmitForm,
    initialValues,
    getSchema
  }
}

export default useForm
