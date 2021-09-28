import { object, string, TypeOf } from 'zod'

const callback = object({
  created_at: string(),
  id: string(),
  phone_number: string()
})

export type Callback = TypeOf<typeof callback>

export default callback
