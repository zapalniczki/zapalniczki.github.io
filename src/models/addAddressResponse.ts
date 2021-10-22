import { TypeOf } from 'zod'
import address from './db/address'

const addAddressResponse = address

export type AddAddressResponse = TypeOf<typeof addAddressResponse>

export default addAddressResponse
