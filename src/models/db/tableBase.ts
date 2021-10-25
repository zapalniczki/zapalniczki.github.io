import { object, string } from 'zod'

const tableBase = object({
  created_at: string(),
  id: string().uuid(),
  updated_at: string()
})

export default tableBase
