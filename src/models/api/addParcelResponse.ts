import { parcel } from 'braty-common'
import { TypeOf } from 'zod'

const addParcelResponse = parcel

export type AddParcelResponse = TypeOf<typeof addParcelResponse>

export default addParcelResponse
