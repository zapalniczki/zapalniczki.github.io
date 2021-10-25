import { icon } from 'models'
import { TypeOf } from 'zod'

const getIconsResponseItem = icon

export type GetIconsResponseItem = TypeOf<typeof getIconsResponseItem>

export default getIconsResponseItem
