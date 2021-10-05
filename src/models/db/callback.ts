import { boolean, object, string, TypeOf } from 'zod'

const callback = object({
  created_at: string(),
  updated_at: string(),
  id: string(),
  phone_number: string(),
  done: boolean().nullable()
})

export type Callback = TypeOf<typeof callback>

export default callback
