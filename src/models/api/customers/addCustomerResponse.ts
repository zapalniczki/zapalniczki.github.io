import { TypeOf } from 'zod'
import { customer } from 'braty-common'

const addCustomerResponse = customer

export type AddCustomerResponse = TypeOf<typeof addCustomerResponse>

export default addCustomerResponse
