import { newsletter } from 'braty-common'
import { TypeOf } from 'zod'

const getNewsletterUsersResponseItem = newsletter

export type GetNewsletterUsersResponseItem = TypeOf<
  typeof getNewsletterUsersResponseItem
>

export default getNewsletterUsersResponseItem
