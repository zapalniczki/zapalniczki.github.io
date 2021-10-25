import { TypeOf } from 'zod'
import { callback } from 'models'

const getCallbackResponseItem = callback

export type GetCallbackResponseItem = TypeOf<typeof getCallbackResponseItem>

export default getCallbackResponseItem
