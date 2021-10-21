import { tableBase } from 'models'
import { TypeOf } from 'zod'

const voucher = tableBase.extend({})

export type Voucher = TypeOf<typeof voucher>

export default voucher
