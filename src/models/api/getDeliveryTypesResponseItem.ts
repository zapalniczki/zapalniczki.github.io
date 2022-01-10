import { deliveryType } from 'braty-common'
import { TypeOf } from 'zod'

const getDeliveryTypesResponseItem = deliveryType

export type GetDeliveryTypesResponseItem = TypeOf<
  typeof getDeliveryTypesResponseItem
>

export default getDeliveryTypesResponseItem
