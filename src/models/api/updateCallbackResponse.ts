import { TypeOf } from 'zod'
import { callback } from 'models'

const updateCallbackResponse = callback

export type UpdateCallbackResponse = TypeOf<typeof updateCallbackResponse>

export default updateCallbackResponse
