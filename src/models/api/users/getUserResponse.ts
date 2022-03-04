import { user } from 'braty-common'
import { TypeOf } from 'zod'

const getUserResponse = user

export type GetUserResponse = TypeOf<typeof getUserResponse>

export default getUserResponse
