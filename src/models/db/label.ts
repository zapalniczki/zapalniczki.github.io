import tableBase from './tableBase'
import { string, TypeOf } from 'zod'

const label = tableBase.extend({
  label: string()
})

export type Label = TypeOf<typeof label>

export default label
