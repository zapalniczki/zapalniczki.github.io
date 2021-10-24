import { voucher } from 'models'
import { TypeOf } from 'zod'

const addVoucherResponse = voucher

export type AddVoucherResponse = TypeOf<typeof addVoucherResponse>

export default addVoucherResponse
