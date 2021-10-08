import { string, object, TypeOf } from 'zod'

const icon = object({
  label: string(),
  created_at: string(),
  updated_at: string()
})

export type Icon = TypeOf<typeof icon>

export default icon
