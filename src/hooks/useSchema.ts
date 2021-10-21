import { string, StringSchema } from 'yup'
import useTranslation from './useTranslation'

const useSchema = () => {
  const { t: commonT } = useTranslation('COMMON')

  const schemas: Record<SchemaKey, StringSchema> = {
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
    STREET: string().required(commonT('VALIDATIONS.STREET.required')),
    STREET_NR: string().required(commonT('VALIDATIONS.STREET_NR.required')),
    ADDRESS_CDN: string(),
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
  | 'STREET'
  | 'STREET_NR'
  | 'ADDRESS_CDN'
  | 'POST_CODE'
  | 'CITY'
  | 'NIP'

export default useSchema
