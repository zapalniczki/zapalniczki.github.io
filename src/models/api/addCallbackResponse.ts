import { TypeOf } from 'zod'
import { callback } from 'braty-common'

const addCallbackResponse = callback

export type AddCallbackResponse = TypeOf<typeof addCallbackResponse>

export default addCallbackResponse
