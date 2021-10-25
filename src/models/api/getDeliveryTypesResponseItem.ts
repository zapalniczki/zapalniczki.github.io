import { deliveryType } from 'models'
import { TypeOf } from 'zod'

const getDeliveryTypesResponseItem = deliveryType

export type GetDeliveryTypesResponseItem = TypeOf<
  typeof getDeliveryTypesResponseItem
>

export default getDeliveryTypesResponseItem
