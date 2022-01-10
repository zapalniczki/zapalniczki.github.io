import { newsletter } from 'braty-common'
import { TypeOf } from 'zod'

const addEmailResponse = newsletter

export type AddEmailResponse = TypeOf<typeof addEmailResponse>

export default addEmailResponse
