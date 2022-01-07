import tableBase from './tableBase'
import { string, TypeOf } from 'zod'

const label = tableBase.extend({
  label_pl: string(),
  label_en: string()
})

export type Label = TypeOf<typeof label>

export default label
