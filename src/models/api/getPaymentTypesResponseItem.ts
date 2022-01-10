import { paymentType } from 'braty-common'
import { TypeOf } from 'zod'

const getPaymentTypesResponseItem = paymentType

export type GetPaymentTypesResponseItem = TypeOf<
  typeof getPaymentTypesResponseItem
>

export default getPaymentTypesResponseItem
