import { getRequiredOrNot } from 'utils'
import useTranslation from './useTranslation'

const useInput = () => {
  const { t: commonT } = useTranslation('COMMON')

  const getInput = (key: InputKey, required?: boolean): InputValue => {
    const value: InputValue = inputs[key]
    const { label, ...rest } = value

    return {
      ...rest,
      ...(rest.placeholder && { placeholder: commonT(rest.placeholder) }),
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
  SUBMIT: {
    label: 'INPUTS.SUBMIT.label',
    placeholder: 'INPUTS.SUBMIT.placeholder'
  },
  VOUCHER: {
    label: 'INPUTS.VOUCHER.label',
    maxLength: 36
  },
  PAYMENT_TYPE: {
    label: 'INPUTS.PAYMENT_TYPE.label'
  },

  DELIVERY_TYPE: {
    label: 'INPUTS.DELIVERY_TYPE.label'
  },
  FULL_NAME: {
    label: 'INPUTS.FULL_NAME.label',
    placeholder: 'INPUTS.FULL_NAME.placeholder',
    autocomplete: 'name'
  },
  COMPANY: {
    label: 'INPUTS.COMPANY.label',
    placeholder: 'INPUTS.COMPANY.placeholder',
    autocomplete: 'organization'
  },
  EMAIL: {
    label: 'INPUTS.EMAIL.label',
    placeholder: 'INPUTS.EMAIL.placeholder',
    autocomplete: 'email'
  },
  PHONE: {
    label: 'INPUTS.PHONE.label',
    placeholder: 'INPUTS.PHONE.placeholder',
    autocomplete: 'tel'
  },
  PHONE_NOT_MOBILE: {
    label: 'INPUTS.PHONE_NOT_MOBILE.label',
    placeholder: 'INPUTS.PHONE_NOT_MOBILE.placeholder',
    maxLength: 11
  },
  STREET_ADDRESS: {
    label: 'INPUTS.STREET_ADDRESS.label',
    placeholder: 'INPUTS.STREET_ADDRESS.placeholder',
    autocomplete: 'street-address'
  },
  POST_CODE: {
    label: 'INPUTS.POST_CODE.label',
    placeholder: 'INPUTS.POST_CODE.placeholder',
    maxLength: 6,
    autocomplete: 'postal-code'
  },
  CITY: {
    label: 'INPUTS.CITY.label',
    placeholder: 'INPUTS.CITY.placeholder',
    autocomplete: 'address-level2'
  },
  NIP: {
    label: 'INPUTS.NIP.label',
    placeholder: 'INPUTS.NIP.placeholder',
    maxLength: 10
  },
  ORDER_ID: {
    label: 'INPUTS.ORDER_ID.label',
    placeholder: 'INPUTS.ORDER_ID.placeholder',
    maxLength: 36
  }
}

type InputKey = keyof typeof inputs

export default useInput
