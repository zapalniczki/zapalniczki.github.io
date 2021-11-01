import tableBase from './tableBase'
import { string, TypeOf } from 'zod'

const parcel = tableBase.extend({
  ref: string(),
  link: string()
})

export type Parcel = TypeOf<typeof parcel>

export default parcel
