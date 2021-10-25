import tableBase from './tableBase'
import { string, TypeOf } from 'zod'

const invoice = tableBase.extend({
  order_id: string(),
  url: string()
})

export type Invoice = TypeOf<typeof invoice>

export default invoice
