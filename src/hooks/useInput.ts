import { getRequiredOrNot } from 'utils'
import useTranslation from './useTranslation'

const useInput = () => {
  const { t: commonT } = useTranslation('COMMON')

  const inputs: Record<InputKey, InputValue> = {
    SUBMIT: {
      label: commonT('INPUTS.SUBMIT.label')
    },
    PAYMENT_TYPE: {
      label: commonT('INPUTS.PAYMENT_TYPE.label')
    },
    DELIVERY_TYPE: {
      label: commonT('INPUTS.DELIVERY_TYPE.label')
    },
    FULL_NAME: {
      label: commonT('INPUTS.FULL_NAME.label'),
      placeholder: commonT('INPUTS.FULL_NAME.placeholder')
    },
    COMPANY: {
      label: commonT('INPUTS.COMPANY.label'),
      placeholder: commonT('INPUTS.COMPANY.placeholder')
    },
    EMAIL: {
      label: commonT('INPUTS.EMAIL.label'),
      placeholder: commonT('INPUTS.EMAIL.placeholder')
    },
    PHONE: {
      label: commonT('INPUTS.PHONE.label'),
      placeholder: commonT('INPUTS.PHONE.placeholder')
    },
    STREET: {
      label: commonT('INPUTS.STREET.label'),
      placeholder: commonT('INPUTS.STREET.placeholder')
    },
    STREET_NR: {
      label: commonT('INPUTS.STREET_NR.label'),
      placeholder: commonT('INPUTS.STREET_NR.placeholder')
    },
    ADDRESS_CDN: {
      label: commonT('INPUTS.ADDRESS_CDN.label'),
      placeholder: commonT('INPUTS.ADDRESS_CDN.placeholder')
    },
    POST_CODE: {
      label: commonT('INPUTS.POST_CODE.label'),
      placeholder: commonT('INPUTS.POST_CODE.placeholder'),
      maxLength: 6
    },
    CITY: {
      label: commonT('INPUTS.CITY.label'),
      placeholder: commonT('INPUTS.CITY.placeholder')
    },
    NIP: {
      label: commonT('INPUTS.NIP.label'),
      placeholder: commonT('INPUTS.NIP.placeholder'),
      maxLength: 10
    },
    ORDER_ID: {
      label: commonT('INPUTS.ORDER_ID.label'),
      placeholder: commonT('INPUTS.ORDER_ID.placeholder'),
      maxLength: 36
    }
  }

  const getInput = (key: InputKey, required?: boolean): InputValue => {
    const { label, ...rest } = inputs[key]

    return {
      ...rest,
      label: getRequiredOrNot(label, required)
    }
  }

  return { inputs, getInput }
}

type InputValue = {
  label: string
  maxLength?: number
  placeholder?: string
}

type InputKey =
  | 'EMAIL'
  | 'PHONE'
  | 'ORDER_ID'
  | 'FULL_NAME'
  | 'STREET'
  | 'STREET_NR'
  | 'ADDRESS_CDN'
  | 'POST_CODE'
  | 'CITY'
  | 'COMPANY'
  | 'NIP'
  | 'DELIVERY_TYPE'
  | 'PAYMENT_TYPE'
  | 'SUBMIT'

export default useInput
