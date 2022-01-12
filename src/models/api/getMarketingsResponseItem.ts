import { TypeOf } from 'zod'
import { marketing } from 'braty-common'

const getMarketingsResponseItem = marketing

export type GetMarketingsResponseItem = TypeOf<typeof getMarketingsResponseItem>

export default getMarketingsResponseItem
