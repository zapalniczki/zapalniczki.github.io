import { TypeOf, object, string } from 'zod'

const dbTableBase = object({
  created_at: string(),
  id: string().uuid(),
  updated_at: string()
})

const voucher = dbTableBase.extend({})

export type Voucher = TypeOf<typeof voucher>

export default voucher
