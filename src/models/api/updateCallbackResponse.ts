import { TypeOf } from 'zod'
import { callback } from 'braty-common'

const updateCallbackResponse = callback

export type UpdateCallbackResponse = TypeOf<typeof updateCallbackResponse>

export default updateCallbackResponse
