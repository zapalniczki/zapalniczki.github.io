import { parcel } from 'models'
import { TypeOf } from 'zod'

const addParcelResponse = parcel

export type AddParcelResponse = TypeOf<typeof addParcelResponse>

export default addParcelResponse
