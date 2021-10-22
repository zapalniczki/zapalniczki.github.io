import { TypeOf } from 'zod'
import user from './db/user'

const addUserResponse = user

export type AddUserResponse = TypeOf<typeof addUserResponse>

export default addUserResponse
