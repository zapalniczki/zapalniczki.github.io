import { collection } from 'models'
import { TypeOf } from 'zod'

const getCollectionsResponseItem = collection

export type GetCollectionsResponseItem = TypeOf<
  typeof getCollectionsResponseItem
>

export default getCollectionsResponseItem
