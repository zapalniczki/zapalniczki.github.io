import { RemoteConfig } from 'models/remoteConfig'
import React, { createContext, ReactNode, useState } from 'react'

type RemoteConfigContext = RemoteConfig

export const remoteConfigContext = createContext<RemoteConfigContext>({})

type Props = {
  children: ReactNode
}

const RemoveConfigProvider = ({ children }: Props) => {
  const [remoteConfig] = useState<RemoteConfigContext>({})

  // React.useEffect(() => {
  //   const rc = getRemoteConfig()

  //   rc.settings.minimumFetchIntervalMillis = 10000

  //   fetchAndActivate(rc)
  //     .then((activated) => {
  //       if (!activated) {
  //         console.log('not activated')
  //       }

  //       return getAll(rc)
  //     })
  //     .then((remoteFlags) => {
  //       console.log(remoteFlags)

  //       Object.entries(remoteFlags).map((alfa) => {
  //         const key = alfa[0]
  //         const value = alfa[1]

  //         const val = value.asString()

  //         const
  //         console.log(val)

  //         // const val = value.()
  //         // console.log(alfa, val)
  //       })

  //       // const parsed = remoteConfigSchema.safeParse(remoteFlags)

  //       // console.log('pared', parsed)
  //     })
  //     .catch((error) => console.error(error))
  // }, [])

  return (
    <remoteConfigContext.Provider
      value={{
        ...remoteConfig
      }}
    >
      {children}
    </remoteConfigContext.Provider>
  )
}

export default RemoveConfigProvider
