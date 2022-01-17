import { TypeOf } from 'zod'
import { marketing } from 'braty-common'

const removeMarketingResponse = marketing

export type RemoveMarketingResponse = TypeOf<typeof removeMarketingResponse>

export default removeMarketingResponse
