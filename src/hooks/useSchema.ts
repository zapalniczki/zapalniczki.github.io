import { string, StringSchema } from 'yup'
import useTranslation from './useTranslation'

const useSchema = () => {
  const { t: commonT } = useTranslation('COMMON')

  const schemas: Record<SchemaKey, StringSchema> = {
    email: string()
      .email(commonT('VALIDATIONS.EMAIL.email'))
      .required(commonT('VALIDATIONS.EMAIL.required')),

    phone: string()
      .trim()
      .min(11, commonT('VALIDATIONS.PHONE.min'))
      .matches(/^(\+|\s|[0-9])+$/, commonT('VALIDATIONS.PHONE.matches'))
      .required(commonT('VALIDATIONS.PHONE.required'))
  }

  const getSchema = (key: SchemaKey) => schemas[key]

  return { schemas, getSchema }
}

type SchemaKey = 'email' | 'phone'

export default useSchema
