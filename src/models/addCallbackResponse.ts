import { TypeOf } from 'zod'
import callback from './db/callback'

const addCallbackResponse = callback

export type AddCallbackResponse = TypeOf<typeof addCallbackResponse>

export default addCallbackResponse
