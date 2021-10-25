import tableBase from './tableBase'
import { string, TypeOf } from 'zod'

const collection = tableBase.extend({
  label: string()
})

export type Collection = TypeOf<typeof collection>

export default collection
