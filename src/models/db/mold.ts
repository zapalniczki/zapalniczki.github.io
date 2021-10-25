import tableBase from './tableBase'
import { string, enum as zenum, TypeOf } from 'zod'

const status = zenum(['IN_PROGRESS', 'DONE', 'UNDONE'])
export type MoldStatus = TypeOf<typeof status>

const mold = tableBase.extend({
  status: status,
  label_id: string(),
  icon_id: string()
})

export type Mold = TypeOf<typeof mold>
export const MOLD_STATUSES = status.options

export default mold
