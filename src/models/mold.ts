import { string, object, enum as zenum, TypeOf } from 'zod'

const status = zenum(['IN_PROGRESS', 'DONE'])

export type MoldStatus = TypeOf<typeof status>

const mold = object({
  id: string(),
  productId: string(),
  variant: string(),
  status
})

export type Mold = TypeOf<typeof mold>

export default mold
