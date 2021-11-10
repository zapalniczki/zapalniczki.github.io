import { Session } from '@supabase/supabase-js'
import { getSession } from 'api'
import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import supabase from 'supabase'

type AuthContexType = {
  auth?: Session | null
  isLoggedIn: boolean
  setAuth: React.Dispatch<React.SetStateAction<Session | null | undefined>>
}

export const authContext = createContext<AuthContexType>({
  auth: undefined,
  setAuth: () => undefined,
  isLoggedIn: false
})

type Props = {
  children: ReactNode
}
const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<AuthContexType['auth']>(undefined)
  const { mutateAsync: mutateGetSession } = useMutation(getSession)

  useEffect(() => {
    const start = async () => {
      const session = await mutateGetSession()
      setAuth(session)
    }

    start()
  }, [])

  supabase.auth.onAuthStateChange((event, session) => {
    setAuth(session)
  })

  const isLoggedIn = !!auth?.user

  return (
    <authContext.Provider value={{ auth, setAuth, isLoggedIn }}>
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider
