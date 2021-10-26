import tableBase from './tableBase'
import { number, TypeOf, boolean } from 'zod'

const voucher = tableBase.extend({
  discount: number(),
  is_fixed: boolean(),
  is_used: boolean()
})

export type Voucher = TypeOf<typeof voucher>

export default voucher
