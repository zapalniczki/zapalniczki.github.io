import { Preloader } from 'commonComponents'
import { authContext } from 'providers'
import React, { useContext } from 'react'
import AppRouter from './AppRouter'

const App = () => {
  const { auth } = useContext(authContext)

  if (auth !== undefined) {
    return <AppRouter />
  }

  return <Preloader />
}

export default App
export { default as routes } from './routes'
