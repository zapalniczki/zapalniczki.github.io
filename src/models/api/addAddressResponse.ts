import { TypeOf } from 'zod'
import { address } from 'braty-common'

const addAddressResponse = address

export type AddAddressResponse = TypeOf<typeof addAddressResponse>

export default addAddressResponse
