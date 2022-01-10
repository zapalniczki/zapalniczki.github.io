import { TypeOf } from 'zod'
import { user } from 'braty-common'

const addUserResponse = user

export type AddUserResponse = TypeOf<typeof addUserResponse>

export default addUserResponse
