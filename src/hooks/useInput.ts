import { getRequiredOrNot } from 'utils'
import useTranslation from './useTranslation'

const useInput = () => {
  const commonT = useTranslation('COMMON').withBase('INPUTS')

  const getInput = (key: InputKey, required?: boolean): InputValue => {
    const value: InputValue = inputs[key]
    const { label, placeholder, ...rest } = value

    return {
      ...rest,
      ...(placeholder && { placeholder: commonT(placeholder) }),
      label: getRequiredOrNot(commonT(label), required)
    }
  }

  return { getInput }
}

type InputValue = {
  autocomplete?: string
  label: string
  maxLength?: number
  placeholder?: string
}

const inputs = {
  PARCEL_LINK: {
    label: 'PARCEL_LINK.label',
    placeholder: 'PARCEL_LINK.placeholder'
  },
  PARCEL_REF: {
    label: 'PARCEL_REF.label',
    placeholder: 'PARCEL_REF.placeholder'
  },
  SUBMIT: {
    label: 'SUBMIT.label',
    placeholder: 'SUBMIT.placeholder'
  },
  VOUCHER_ID: {
    label: 'VOUCHER_ID.label',
    maxLength: 36
  },
  PAYMENT_TYPE: {
    label: 'PAYMENT_TYPE.label'
  },

  DELIVERY_TYPE: {
    label: 'DELIVERY_TYPE.label'
  },
  FULL_NAME: {
    label: 'FULL_NAME.label',
    placeholder: 'FULL_NAME.placeholder',
    autocomplete: 'name'
  },
  COMPANY: {
    label: 'COMPANY.label',
    placeholder: 'COMPANY.placeholder',
    autocomplete: 'organization'
  },
  EMAIL: {
    label: 'EMAIL.label',
    placeholder: 'EMAIL.placeholder',
    autocomplete: 'email'
  },
  PHONE: {
    label: 'PHONE.label',
    placeholder: 'PHONE.placeholder',
    autocomplete: 'tel'
  },
  PHONE_NOT_MOBILE: {
    label: 'PHONE_NOT_MOBILE.label',
    placeholder: 'PHONE_NOT_MOBILE.placeholder',
    maxLength: 11
  },
  STREET_ADDRESS: {
    label: 'STREET_ADDRESS.label',
    placeholder: 'STREET_ADDRESS.placeholder',
    autocomplete: 'street-address'
  },
  POST_CODE: {
    label: 'POST_CODE.label',
    placeholder: 'POST_CODE.placeholder',
    maxLength: 6,
    autocomplete: 'postal-code'
  },
  CITY: {
    label: 'CITY.label',
    placeholder: 'CITY.placeholder',
    autocomplete: 'address-level2'
  },
  NIP: {
    label: 'NIP.label',
    placeholder: 'NIP.placeholder',
    maxLength: 10
  },
  ORDER_ID: {
    label: 'ORDER_ID.label',
    placeholder: 'ORDER_ID.placeholder',
    maxLength: 36
  },
  PASSWORD: {
    label: 'PASSWORD.label',
    placeholder: 'PASSWORD.placeholder',
    type: 'password',
    autocomplete: 'current-password'
  },
  NEW_PASSWORD: {
    label: 'NEW_PASSWORD.label',
    placeholder: 'NEW_PASSWORD.placeholder',
    type: 'password',
    autocomplete: 'new-password'
  },
  PASSWORD_CONFIRMATION: {
    label: 'PASSWORD_CONFIRMATION.label',
    placeholder: 'PASSWORD_CONFIRMATION.placeholder',
    type: 'password',
    autocomplete: 'new-password'
  }
}

type InputKey = keyof typeof inputs

export default useInput
