import { useHistory } from 'react-router-dom'
import { object } from 'yup'
import { useSchema } from 'hooks'
import { CHECKOUT_DELIVERY } from 'constants/routes'
import { useContext } from 'react'
import { checkoutContext, ContactDetails2 } from 'providers'
import { IsCompany } from 'types/index2'

export type FormValues = Omit<ContactDetails2, 'isCompany'>

const useForm = () => {
  const { getSchema: getNativeSchema } = useSchema()

  const history = useHistory()
  const { checkout, setCheckout } = useContext(checkoutContext)

  const onSubmitForm = (form: FormValues, isCompany: IsCompany) => {
    setCheckout((prev) => ({
      ...prev,
      contactDetails2: {
        ...form,
        isCompany
      }
    }))

    history.push(CHECKOUT_DELIVERY)
  }

  const initialValues: FormValues = {
    fullName: checkout.contactDetails2?.fullName ?? '',
    nip: checkout.contactDetails2?.nip ?? '',
    street: checkout.contactDetails2?.street ?? '',
    streetNo: checkout.contactDetails2?.streetNo ?? '',
    addressCdn: checkout.contactDetails2?.addressCdn ?? '',
    postCode: checkout.contactDetails2?.postCode ?? '',
    city: checkout.contactDetails2?.city ?? '',
    email: checkout.contactDetails2?.email ?? '',
    phone: checkout.contactDetails2?.phone ?? ''
  }

  const getSchema = (isCompany: IsCompany) => {
    const base = object().shape({
      fullName: getNativeSchema('FULL_NAME'),
      street: getNativeSchema('STREET'),
      streetNo: getNativeSchema('STREET_NR'),
      addressCdn: getNativeSchema('ADDRESS_CDN'),
      postCode: getNativeSchema('POST_CODE'),
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
