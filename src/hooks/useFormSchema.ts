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

    FULL_NAME: () => string().required(commonT('FULL_NAME.required')).trim(),

    COMPANY: () => string().required(commonT('COMPANY.required')).trim(),

    STREET_ADDRESS: () => string().required(commonT('STREET_ADDRESS.required')),

    POST_CODE_PL: () =>
      string()
        .trim()
        .required(commonT('POST_CODE_PL.required'))
        .matches(/^(\d{2})-(\d{3})$/, commonT('POST_CODE_PL.matches')),

    POST_CODE_UK: () =>
      string().trim().required(commonT('POST_CODE_UK.required')),

    POST_CODE_DE: () =>
      string().trim().required(commonT('POST_CODE_DE.required')),

    CITY: () => string().required(commonT('CITY.required')),

    NIP_PL: () =>
      string()
        .required(commonT('NIP_PL.required'))
        .length(10, commonT('NIP_PL.length'))
        .matches(/^(\d{10})$/, commonT('NIP_PL.matches'))
        .test('', commonT('NIP_PL.invalid'), (nip) => {
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

    NIP_UK: () =>
      string().test('', commonT('NIP_UK.invalid'), (vat) => {
        if (!vat) {
          return true
        }

        return validateUKVatNumber(vat)
      }),

    NIP_DE: () =>
      string().test('', commonT('NIP_DE.invalid'), (vat) => {
        if (!vat) {
          return true
        }

        return validateUKVatNumber(vat)
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

    TEST: () => string(),

    COUNTRY: () => string().required(commonT('COUNTRY.required'))
  }

  const getSchema = (key: SchemaKey, variant?: boolean) => schemas[key](variant)

  return {
    schemas,
    getSchema
  }
}

type SchemaKey =
  | 'CITY'
  | 'COMPANY'
  | 'COUNTRY'
  | 'DELIVERY_TYPE'
  | 'EMAIL'
  | 'FULL_NAME'
  | 'NAME'
  | 'NEW_PASSWORD'
  | 'NIP_DE'
  | 'NIP_PL'
  | 'NIP_UK'
  | 'NOTES'
  | 'ORDER_ID'
  | 'PASSWORD'
  | 'PASSWORD_CONFIRMATION'
  | 'PAYMENT_TYPE'
  | 'PHONE'
  | 'POST_CODE_DE'
  | 'POST_CODE_PL'
  | 'POST_CODE_UK'
  | 'PRODUCT_QUANTITY'
  | 'PLUS_CODE'
  | 'STREET_ADDRESS'
  | 'TEST'
  | 'VOUCHER_ID'

export default useFormSchema

function validateUKVatNumber(toCheck: string) {
  function GBVATCheckDigit(vatnumber: string) {
    const multipliers = [8, 7, 6, 5, 4, 3, 2]

    if (vatnumber.slice(0, 2) == 'GD') {
      if (parseInt(vatnumber.slice(2, 3)) < 500) {
        return true
      }

      return false
    }

    if (vatnumber.slice(0, 2) == 'HA') {
      if (parseInt(vatnumber.slice(2, 3)) > 499) {
        return true
      }

      return false
    }

    let total = 0
    if (Number(vatnumber.slice(0)) == 0) {
      return false
    }

    const no = Number(vatnumber.slice(0, 7))
    for (let i = 0; i < 7; i++) {
      total += Number(vatnumber.charAt(i)) * multipliers[i]
    }

    let cd = total
    while (cd > 0) {
      cd = cd - 97
    }

    cd = Math.abs(cd)
    if (
      cd === parseInt(vatnumber.slice(7, 9)) &&
      no < 9990001 &&
      (no < 100000 || no > 999999) &&
      (no < 9490001 || no > 9700000)
    ) {
      return true
    }

    if (cd >= 55) {
      cd = cd - 55
    } else {
      cd = cd + 42
    }

    if (cd === parseInt(vatnumber.slice(7, 9)) && no > 1000000) {
      return true
    }

    return false
  }

  const vatexp = []
  vatexp.push(/^(GB)?(\d{9})$/) //** UK (Standard)
  vatexp.push(/^(GB)?(\d{12})$/) //** UK (Branches)
  vatexp.push(/^(GB)?(GD\d{3})$/) //** UK (Government)
  vatexp.push(/^(GB)?(HA\d{3})$/) //** UK (Health authority)

  const defCCode = 'GB'
  let valid = false
  let VATNumber = toCheck.toUpperCase()
  VATNumber = VATNumber.replace(/(\s|-|\.)+/g, '')

  for (let i = 0; i < vatexp.length; i++) {
    if (vatexp[i].test(VATNumber)) {
      let cCode = RegExp.$1
      const cNumber = RegExp.$2

      if (cCode.length == 0) {
        cCode = defCCode
      }

      if (GBVATCheckDigit(cNumber)) {
        valid = !!VATNumber
      }

      break
    }
  }

  return valid
}

export function validateDEVatNumber(toCheck: string) {
  function DEVATCheckDigit(vatnumber: string) {
    let product = 10
    let sum = 0
    let checkdigit = 0
    for (let i = 0; i < 8; i++) {
      sum = (Number(vatnumber.charAt(i)) + product) % 10

      if (sum == 0) {
        sum = 10
      }

      product = (2 * sum) % 11
    }

    if (11 - product == 10) {
      checkdigit = 0
    } else {
      checkdigit = 11 - product
    }

    if (checkdigit == parseInt(vatnumber.slice(8, 9))) {
      return true
    }

    return false
  }

  const vatexp = []
  const defCCode = 'DE'

  vatexp.push(/^(DE)([1-9]\d{8})$/)

  let VATNumber = toCheck.toUpperCase()
  VATNumber = VATNumber.replace(/(\s|-|\.)+/g, '')

  let valid = false
  for (let i = 0; i < vatexp.length; i++) {
    if (vatexp[i].test(VATNumber)) {
      let cCode = RegExp.$1
      const cNumber = RegExp.$2
      if (cCode.length == 0) {
        cCode = defCCode
      }

      if (DEVATCheckDigit(cNumber)) {
        valid = !!VATNumber
      }
      break
    }
  }

  return valid
}
