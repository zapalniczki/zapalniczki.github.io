import { newsletter } from 'braty-common'
import { TypeOf } from 'zod'

const updateNewsletterConsentResponse = newsletter

export type UpdateNewsletterConsentResponse = TypeOf<
  typeof updateNewsletterConsentResponse
>

export default updateNewsletterConsentResponse
