import { voucher } from 'models'
import { TypeOf } from 'zod'

const editVoucherResponse = voucher

export type EditVoucherResponse = TypeOf<typeof editVoucherResponse>

export default editVoucherResponse
