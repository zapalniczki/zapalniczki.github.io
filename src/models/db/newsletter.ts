import { boolean, object, string, TypeOf } from 'zod'

const newsletter = object({
  id: string().uuid(),
  created_at: string(),
  updated_at: string(),
  email: string(),
  consent: boolean()
})

export type Newsletter = TypeOf<typeof newsletter>

export default newsletter
