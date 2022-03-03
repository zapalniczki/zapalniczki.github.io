import { TypeOf } from 'zod'
import { user } from 'braty-common'

const addCustomerResponse = user

export type AddCustomerResponse = TypeOf<typeof addCustomerResponse>

export default addCustomerResponse
