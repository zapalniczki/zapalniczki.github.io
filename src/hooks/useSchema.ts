import { number, NumberSchema, string, StringSchema } from 'yup'
import useTranslation from './useTranslation'

const useSchema = () => {
  const { t: commonT } = useTranslation('COMMON')

  const schemas: Record<SchemaKey, StringSchema | NumberSchema> = {
    VOUCHER: string().length(36, commonT('VALIDATIONS.VOUCHER.length')),
    PRODUCT_QUANTITY: number()
      .min(1, commonT('VALIDATIONS.PRODUCT_QUANTITY.min'))
      .max(100, commonT('VALIDATIONS.PRODUCT_QUANTITY.max'))
      .required(commonT('VALIDATIONS.PRODUCT_QUANTITY.required')),
    PAYMENT_TYPE: string().required(
      commonT('VALIDATIONS.PAYMENT_TYPE.required')
    ),
    DELIVERY_TYPE: string().required(
      commonT('VALIDATIONS.DELIVERY_TYPE.required')
    ),
    EMAIL: string()
      .email(commonT('VALIDATIONS.EMAIL.email'))
      .required(commonT('VALIDATIONS.EMAIL.required')),

    PHONE: string()
      .trim()
      .min(11, commonT('VALIDATIONS.PHONE.min'))
      .matches(/^(\+|\s|[0-9])+$/, commonT('VALIDATIONS.PHONE.matches'))
      .required(commonT('VALIDATIONS.PHONE.required')),

    ORDER_ID: string()
      .required(commonT('VALIDATIONS.ORDER_ID.required'))
      .length(36, commonT('VALIDATIONS.ORDER_ID.length')),

    FULL_NAME: string().required(commonT('VALIDATIONS.FULL_NAME.required')),
    STREET_ADDRESS: string().required(
      commonT('VALIDATIONS.STREET_ADDRESS.required')
    ),
    POST_CODE: string()
      .trim()
      .matches(/^(\d{2})-(\d{3})$/, commonT('VALIDATIONS.POST_CODE.matches'))
      .required(commonT('VALIDATIONS.POST_CODE.required')),
    CITY: string().required(commonT('VALIDATIONS.CITY.required')),
    NIP: string()
      .required(commonT('VALIDATIONS.NIP.required'))
      .length(10, commonT('VALIDATIONS.NIP.length'))
      .matches(/^(\d{10})$/, commonT('VALIDATIONS.NIP.matches'))
  }

  const getSchema = (key: SchemaKey) => schemas[key]

  return { schemas, getSchema }
}

type SchemaKey =
  | 'EMAIL'
  | 'PHONE'
  | 'ORDER_ID'
  | 'FULL_NAME'
  | 'STREET_ADDRESS'
  | 'POST_CODE'
  | 'CITY'
  | 'NIP'
  | 'DELIVERY_TYPE'
  | 'PAYMENT_TYPE'
  | 'PRODUCT_QUANTITY'
  | 'VOUCHER'

export default useSchema
