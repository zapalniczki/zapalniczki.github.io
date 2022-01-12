import { TypeOf } from 'zod'
import { marketing } from 'braty-common'

const addMarketingResponse = marketing

export type AddMarketingResponse = TypeOf<typeof addMarketingResponse>

export default addMarketingResponse
