import { useHistory } from 'react-router-dom'
import { object, string } from 'yup'
import { useTranslation } from 'hooks'
import { CHECKOUT_DELIVERY } from 'constants/routes'
import { useContext } from 'react'
import { checkoutContext, ContactDetails2 } from 'providers'
import { IsCompany } from 'Types'

export type FormValues = Omit<ContactDetails2, 'isCompany'>

const useForm = () => {
  const { t } = useTranslation('CHECKOUT_DETAILS')

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
      fullName: string().required(t('form.fullName.validations.required')),
      email: string()
        .email(t('form.email.validations.email'))
        .required(t('form.email.validations.required')),
      phone: string()
        .min(11, t('form.phone.validations.min'))
        .required(t('form.phone.validations.required')),
      street: string().required(t('form.street.validations.required')),
      streetNo: string().required(t('form.streetNr.validations.required')),
      addressCdn: string(),
      postCode: string()
        .trim()
        .matches(/^(\d{2})-(\d{3})$/, t('form.postCode.validations.matches'))
        .required(t('form.postCode.validations.required')),
      city: string().required(t('form.city.validations.required'))
    })

    const companySchema = base.shape({
      nip: string()
        .required(t('form.nip.validations.required'))
        .length(10, t('form.nip.validations.length'))
        .matches(/^(\d{10})$/, t('form.nip.validations.matches'))
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
