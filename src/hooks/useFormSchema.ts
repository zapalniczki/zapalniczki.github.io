import { number, NumberSchema, ref, string, StringSchema } from 'yup'
import useTranslation from './useTranslation'

const useFormSchema = () => {
  const commonT = useTranslation('COMMON').withBase('VALIDATIONS')

  const schemas: Record<
    SchemaKey,
    (variant?: boolean) => StringSchema | NumberSchema
  > = {
    VOUCHER_ID: () => string().length(36, commonT('VOUCHER_ID.length')),

    PRODUCT_QUANTITY: () =>
      number()
        .min(1, commonT('PRODUCT_QUANTITY.min'))
        .max(100, commonT('PRODUCT_QUANTITY.max'))
        .required(commonT('PRODUCT_QUANTITY.required')),

    PAYMENT_TYPE: () => string().required(commonT('PAYMENT_TYPE.required')),

    DELIVERY_TYPE: () => string().required(commonT('DELIVERY_TYPE.required')),

    EMAIL: (variant) => {
      if (variant) {
        return string().email(commonT('EMAIL.email'))
      }

      return string()
        .email(commonT('EMAIL.email'))
        .required(commonT('EMAIL.required'))
    },

    PHONE: (variant) => {
      if (variant) {
        return string().trim()
      }

      return string()
        .trim()
        .matches(/^(\d){8,}$/, commonT('PHONE.matches'))
        .required(commonT('PHONE.required'))
    },

    ORDER_ID: () =>
      string()
        .required(commonT('ORDER_ID.required'))
        .length(36, commonT('ORDER_ID.length')),

    FULL_NAME: () => string().required(commonT('FULL_NAME.required')),

    STREET_ADDRESS: () => string().required(commonT('STREET_ADDRESS.required')),

    POST_CODE: () =>
      string()
        .trim()
        .matches(/^(\d{2})-(\d{3})$/, commonT('POST_CODE.matches'))
        .required(commonT('POST_CODE.required')),

    CITY: () => string().required(commonT('CITY.required')),

    NIP: () =>
      string()
        .required(commonT('NIP.required'))
        .length(10, commonT('NIP.length'))
        .matches(/^(\d{10})$/, commonT('NIP.matches'))
        .test('', commonT('NIP.invalid'), (nip) => {
          if (!nip) {
            return false
          }

          const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7]
          const controlNumber = parseInt(nip.substring(9, 10))
          const weightCount = weights.length

          let sum = 0
          for (let i = 0; i < weightCount; i++) {
            sum += parseInt(nip.slice(i, i + 1)) * weights[i]
          }

          const mod = sum % 11
          const isValid = mod === controlNumber

          return isValid
        }),

    PASSWORD: () =>
      string()
        .required(commonT('PASSWORD.required'))
        .min(6, commonT('PASSWORD.min')),

    NEW_PASSWORD: () =>
      string()
        .required(commonT('NEW_PASSWORD.required'))
        .min(6, commonT('NEW_PASSWORD.min')),

    PASSWORD_CONFIRMATION: () =>
      string()
        .required(commonT('PASSWORD_CONFIRMATION.required'))
        .oneOf([ref('newPassword')], commonT('PASSWORD_CONFIRMATION.oneOf')),

    NOTES: () => string(),

    NAME: () => string(),

    PLUS_CODE: () => string(),

    TEST: () => string()
  }

  const getSchema = (key: SchemaKey, variant?: boolean) => schemas[key](variant)

  return {
    schemas,
    getSchema
  }
}

type SchemaKey =
  | 'CITY'
  | 'TEST'
  | 'DELIVERY_TYPE'
  | 'EMAIL'
  | 'FULL_NAME'
  | 'NAME'
  | 'NEW_PASSWORD'
  | 'NIP'
  | 'NOTES'
  | 'ORDER_ID'
  | 'PASSWORD'
  | 'PASSWORD_CONFIRMATION'
  | 'PAYMENT_TYPE'
  | 'PLUS_CODE'
  | 'PHONE'
  | 'POST_CODE'
  | 'PRODUCT_QUANTITY'
  | 'STREET_ADDRESS'
  | 'VOUCHER_ID'

export default useFormSchema
