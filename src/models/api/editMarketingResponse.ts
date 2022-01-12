import { TypeOf } from 'zod'
import { marketing } from 'braty-common'

const editMarketingResponse = marketing

export type EditMarketingResponse = TypeOf<typeof editMarketingResponse>

export default editMarketingResponse
