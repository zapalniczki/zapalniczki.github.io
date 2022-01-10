import { icon } from 'braty-common'
import { TypeOf } from 'zod'

const getIconsResponseItem = icon

export type GetIconsResponseItem = TypeOf<typeof getIconsResponseItem>

export default getIconsResponseItem
