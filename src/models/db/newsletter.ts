import tableBase from './tableBase'
import { boolean, string, TypeOf } from 'zod'

const newsletter = tableBase.extend({
  email: string(),
  consent: boolean()
})

export type Newsletter = TypeOf<typeof newsletter>

export default newsletter
