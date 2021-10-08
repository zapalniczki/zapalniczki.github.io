import { string, object, TypeOf } from 'zod'

const icon = object({
  id: string(),
  label: string(),
  created_at: string(),
  updated_at: string()
})

export type Icon = TypeOf<typeof icon>

export default icon
