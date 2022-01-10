import { mold } from 'braty-common'
import { TypeOf } from 'zod'

const updateMoldResponse = mold

export type UpdateMoldResponse = TypeOf<typeof updateMoldResponse>

export default updateMoldResponse
