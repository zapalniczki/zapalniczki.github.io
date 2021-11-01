import tableBase from './tableBase'
import { string, TypeOf } from 'zod'

const parcel = tableBase.extend({
  label_id: string(),
  icon_id: string(),
  ref: string(),
  link: string()
})

export type Parcel = TypeOf<typeof parcel>

export default parcel
