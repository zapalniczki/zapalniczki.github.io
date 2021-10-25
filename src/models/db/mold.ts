import { string, object, enum as zenum, TypeOf } from 'zod'

const status = zenum(['IN_PROGRESS', 'DONE', 'UNDONE'])

export type MoldStatus = TypeOf<typeof status>

const mold = object({
  id: string(),
  created_at: string(),
  updated_at: string(),
  status: status,
  label_id: string(),
  icon_id: string()
})

export type Mold = TypeOf<typeof mold>
export const MOLD_STATUSES = status.options

export default mold
