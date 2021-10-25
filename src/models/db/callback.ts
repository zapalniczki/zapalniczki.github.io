import tableBase from './tableBase'
import { boolean, string, TypeOf } from 'zod'

const callback = tableBase.extend({
  phone_number: string(),
  done: boolean().nullable()
})

export type Callback = TypeOf<typeof callback>

export default callback
