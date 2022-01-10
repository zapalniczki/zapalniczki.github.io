import { paymentType } from 'braty-common'
import { TypeOf } from 'zod'

const updatePaymentTypeResponse = paymentType

export type UpdatePaymentTypeResponse = TypeOf<typeof updatePaymentTypeResponse>

export default updatePaymentTypeResponse
