import { object, string, TypeOf } from 'zod'

const collection = object({
  id: string(),
  created_at: string(),
  updated_at: string(),
  label: string()
})

export type Collection = TypeOf<typeof collection>

export default collection
