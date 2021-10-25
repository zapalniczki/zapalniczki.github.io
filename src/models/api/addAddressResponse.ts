import { TypeOf } from 'zod'
import { address } from 'models'

const addAddressResponse = address

export type AddAddressResponse = TypeOf<typeof addAddressResponse>

export default addAddressResponse
