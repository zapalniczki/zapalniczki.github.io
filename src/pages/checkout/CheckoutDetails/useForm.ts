import { ROUTES } from 'braty-common'
import { useFormSchema } from 'hooks'
import { ContactDetails } from 'models'
import { checkoutContext } from 'providers'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { object, string } from 'yup'

export type FormValues = ContactDetails

const useForm = () => {
  const { getSchema: getNativeSchema } = useFormSchema()

  const navigate = useNavigate()
  const { checkout, setCheckout } = useContext(checkoutContext)

  const onSubmitForm = (form: FormValues) => {
    setCheckout((prev) => ({
      ...prev,
      contact_details: { ...form }
    }))

    navigate(ROUTES.CHECKOUT_DELIVERY)
  }

  const initialValues: FormValues = {
    full_name: checkout.contact_details?.full_name ?? '',
    nip: checkout.contact_details?.nip ?? '',
    street_address: checkout.contact_details?.street_address ?? '',
    post_code: checkout.contact_details?.post_code ?? '',
    city: checkout.contact_details?.city ?? '',
    email: checkout.contact_details?.email ?? '',
    phone: checkout.contact_details?.phone ?? '',
    country: checkout.contact_details?.country ?? 'Poland'
  }

  const getSchema = (isCompany: boolean) => {
    const base = object().shape({
      city: getNativeSchema('CITY'),
      country: getNativeSchema('COUNTRY'),
      email: getNativeSchema('EMAIL'),
      full_name: getNativeSchema('FULL_NAME'),
      phone: getNativeSchema('PHONE'),
      post_code: getNativeSchema('POST_CODE'),
      street_address: getNativeSchema('STREET_ADDRESS')
    })

    const companySchema = base.shape({
      nip: string()
        .when('country', {
          is: 'Poland',
          then: getNativeSchema('NIP_PL')
        })
        .when('country', {
          is: 'United Kingdom',
          then: getNativeSchema('NIP_UK')
        })
        .when('country', {
          is: 'Germany',
          then: getNativeSchema('NIP_DE')
        })
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
