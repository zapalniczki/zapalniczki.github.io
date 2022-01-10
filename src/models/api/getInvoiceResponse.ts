import { invoice } from 'braty-common'
import { TypeOf } from 'zod'

const getInvoiceResponse = invoice

export type GetInvoiceResponse = TypeOf<typeof getInvoiceResponse>

export default getInvoiceResponse
