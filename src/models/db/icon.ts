import { boolean, string, TypeOf } from 'zod'
import tableBase from './tableBase'

const icon = tableBase.extend({
  label_pl: string(),
  label_en: string(),
  visible: boolean()
})

export type Icon = TypeOf<typeof icon>

export default icon
