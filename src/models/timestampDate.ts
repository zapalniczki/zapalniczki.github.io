import { number, object, TypeOf } from 'zod'

const timestapDate = object({
  seconds: number(),
  nanoseconds: number()
})

export type TimestampDate = TypeOf<typeof timestapDate>

export default timestapDate
