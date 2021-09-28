import { User } from 'firebase/auth'
import React, { createContext, ReactNode, useState } from 'react'

type AuthContexType = {
  auth?: User | null
  setAuth: React.Dispatch<React.SetStateAction<User | null | undefined>>
}

export const authContext = createContext<AuthContexType>({
  auth: undefined,
  setAuth: () => undefined
})

type Props = {
  children: ReactNode
}
const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<AuthContexType['auth']>(undefined)

  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider
