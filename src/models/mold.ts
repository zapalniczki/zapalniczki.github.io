import { string, object, enum as zenum, TypeOf } from 'zod'

const status = zenum(['IN_PROGRESS', 'DONE'])

export type MoldStatus = TypeOf<typeof status>

const mold = object({
  id: string(),
  created_at: string(),
  updated_at: string(),
  status: status.nullable()
})

export type Mold = TypeOf<typeof mold>

export default mold
