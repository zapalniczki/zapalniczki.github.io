import { string, object, TypeOf } from 'zod'

const label = object({
  id: string(),
  created_at: string(),
  updated_at: string(),
  label: string()
})

export type Label = TypeOf<typeof label>

export default label
