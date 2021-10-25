import { TypeOf } from 'zod'
import { user } from 'models'

const addUserResponse = user

export type AddUserResponse = TypeOf<typeof addUserResponse>

export default addUserResponse
