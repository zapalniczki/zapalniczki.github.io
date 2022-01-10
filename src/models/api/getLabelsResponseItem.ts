import { label } from 'braty-common'
import { TypeOf } from 'zod'

const getLabelsResponseItem = label

export type GetLabelsResponseItem = TypeOf<typeof getLabelsResponseItem>

export default getLabelsResponseItem
