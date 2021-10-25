import { TypeOf } from 'zod'
import { callback } from 'models'

const addCallbackResponse = callback

export type AddCallbackResponse = TypeOf<typeof addCallbackResponse>

export default addCallbackResponse
