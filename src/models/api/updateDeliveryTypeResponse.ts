import { deliveryType } from 'braty-common'
import { TypeOf } from 'zod'

const updateDeliveryTypeResponse = deliveryType

export type UpdateDeliveryTypeResponse = TypeOf<
  typeof updateDeliveryTypeResponse
>

export default updateDeliveryTypeResponse
