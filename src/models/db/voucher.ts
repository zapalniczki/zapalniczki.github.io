import tableBase from './tableBase'
import { TypeOf } from 'zod'

const voucher = tableBase.extend({})

export type Voucher = TypeOf<typeof voucher>

export default voucher
