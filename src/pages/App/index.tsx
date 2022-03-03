import { Preloader } from 'commonComponents'
import { initializeApp } from 'firebase/app'
import { authContext } from 'providers'
import React, { useContext } from 'react'
import AppRouter from './AppRouter'
import { envs } from 'config'

const App = () => {
  const { auth } = useContext(authContext)
  const firebaseApp = initializeApp({
    apiKey: envs.apiKey,
    authDomain: envs.authDomain,
    databaseURL: envs.databaseURL,
    projectId: envs.projectId,
    storageBucket: envs.storageBucket,
    messagingSenderId: envs.messagingSenderId,
    appId: envs.appId
  })

  if (auth !== undefined && firebaseApp) {
    return <AppRouter />
  }

  return <Preloader />
}

export default App
export { default as routes } from './routes'
