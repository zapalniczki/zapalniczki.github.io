import { parcel } from 'models'
import { TypeOf } from 'zod'

const editParcelResponse = parcel

export type EditParcelResponse = TypeOf<typeof editParcelResponse>

export default editParcelResponse
