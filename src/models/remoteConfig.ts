import { object, string, TypeOf } from 'zod'

const remoteConfig = object({
  testKey: string().optional()
})

export type RemoteConfig = TypeOf<typeof remoteConfig>

export default remoteConfig
