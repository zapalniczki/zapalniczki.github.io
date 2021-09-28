import React, { useContext, useEffect } from 'react'
import AppRouter from 'pages/App/AppRouter'
import { getAuth } from 'firebase/auth'
import { authContext } from 'providers/AuthProvider'
import { Preloader } from 'commonComponents'

const App = () => {
  const { auth, setAuth } = useContext(authContext)

  useEffect(() => {
    getAuth().onAuthStateChanged(async (user) => {
      if (user) {
        // setAuth(user)
      } else {
        setAuth(null)
      }
    })
  }, [])

  if (auth === undefined) {
    return <Preloader />
  }

  return <AppRouter />
}

export default App
