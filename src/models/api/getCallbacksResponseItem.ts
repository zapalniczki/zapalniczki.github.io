import { TypeOf } from 'zod'
import { callback } from 'braty-common'

const getCallbackResponseItem = callback

export type GetCallbackResponseItem = TypeOf<typeof getCallbackResponseItem>

export default getCallbackResponseItem
