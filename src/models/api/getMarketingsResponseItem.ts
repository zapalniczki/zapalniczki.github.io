import { marketing } from 'braty-common'
import { TypeOf } from 'zod'

const getMarketingsResponseItem = marketing

export type GetMarketingsResponseItem = TypeOf<typeof getMarketingsResponseItem>

export default GetMarketingsResponseItem
