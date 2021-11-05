import React, { useContext, useEffect } from 'react'
import AppRouter from './AppRouter'
import { authContext } from 'providers'
import { Preloader } from 'commonComponents'

const App = () => {
  const { auth, setAuth } = useContext(authContext)

  useEffect(() => {
    setAuth(null)
  }, [])

  if (auth === undefined) {
    return <Preloader />
  }

  return <AppRouter />
}

export default App
export { default as routes } from './routes'
