import { string, TypeOf } from 'zod'
import tableBase from './tableBase'

const icon = tableBase.extend({
  label: string()
})

export type Icon = TypeOf<typeof icon>

export default icon
