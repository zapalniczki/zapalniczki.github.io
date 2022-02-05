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
  POST_CODE_PL: {
    label: 'POST_CODE_PL.label',
    placeholder: 'POST_CODE_PL.placeholder',
    maxLength: 6,
    autocomplete: 'postal-code'
  },
  POST_CODE_UK: {
    label: 'POST_CODE_UK.label',
    placeholder: 'POST_CODE_UK.placeholder',
    autocomplete: 'postal-code'
  },
  POST_CODE_DE: {
    label: 'POST_CODE_DE.label',
    placeholder: 'POST_CODE_DE.placeholder',
    autocomplete: 'postal-code'
  },

  CITY: {
    label: 'CITY.label',
    placeholder: 'CITY.placeholder',
    autocomplete: 'address-level2'
  },
  COUNTRY: {
    label: 'COUNTRY.label',
    placeholder: 'COUNTRY.placeholder'
  },

  MARKETING_STATUS: {
    label: 'MARKETING_STATUS.label',
    placeholder: 'MARKETING_STATUS.placeholder'
  },

  NIP_PL: {
    label: 'NIP_PL.label',
    placeholder: 'NIP_PL.placeholder',
    maxLength: 10
  },
  NIP_UK: {
    label: 'NIP_UK.label',
    placeholder: 'NIP_UK.placeholder'
  },
  NIP_DE: {
    label: 'NIP_DE.label',
    placeholder: 'NIP_DE.placeholder'
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
  },
  NOTES: {
    label: 'NOTES.label',
    placeholder: 'NOTES.placeholder',
    textarea: true
  },
  NAME: {
    label: 'NAME.label',
    placeholder: 'NAME.placeholder',
    type: 'text'
  },
  PLUS_CODE: {
    label: 'PLUS_CODE.label',
    placeholder: 'PLUS_CODE.placeholder',
    type: 'text'
  },
  SEND_BROCHURE_AGREEMENT: {
    label: 'SEND_BROCHURE_AGREEMENT.label'
  },
  SEND_BROCHURE_CYCLIC_AGREEMENT: {
    label: 'SEND_BROCHURE_CYCLIC_AGREEMENT.label'
  }
}

export type InputKey = keyof typeof inputs

export default useInput
