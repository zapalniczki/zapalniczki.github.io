import React, { ReactNode, useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { createContext } from 'react'

const firebaseConfig = {
  apiKey: 'AIzaSyAXnOQn6hJ15jMRHqRT-1nozJ8-omP0s2E',
  authDomain: 'zapalniczki-c7234.firebaseapp.com',
  databaseURL:
    'https://zapalniczki-c7234-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'zapalniczki-c7234',
  storageBucket: 'zapalniczki-c7234.appspot.com',
  messagingSenderId: '397821315416',
  appId: '1:397821315416:web:7af195e1b14c809e4f3d2d'
}

// Initialize Firebase
initializeApp(firebaseConfig)

import {
  getRemoteConfig,
  getAll,
  fetchAndActivate
} from 'firebase/remote-config'
import { boolean, object, TypeOf } from 'zod'

const init: RemoteConfigContext = {
  _404: true,
  adminCallbacks: false,
  adminDeliveryTypes: false,
  adminIcons: false,
  adminLabels: false,
  adminMolds: false,
  adminOrders: false,
  adminPaymentTypes: false,
  cart: true,
  checkoutDelivery: true,
  checkoutDetails: true,
  checkoutPayment: true,
  checkoutResult: true,
  christmas2021: false,
  christmas: false,
  contact: true,
  customer: false,
  deliveryAndPayments: false,
  documents: false,
  home: true,
  howToCreateOrder: false,
  i18n: false,
  order: true,
  products: true,
  signIn: false,
  signUp: false,
  signedOut: false,
  viewProduct: true
}

type Props = {
  children: ReactNode
}

const RemoteConfigProvider = ({ children }: Props) => {
  const [config, setConfig] = useState<RemoteConfigContext>(init)

  useEffect(() => {
    async function start() {
      const remoteConfig = getRemoteConfig()
      remoteConfig.settings = {
        minimumFetchIntervalMillis: 1,
        fetchTimeoutMillis: 6000
      }

      await fetchAndActivate(remoteConfig)

      const rawValues = getAll(remoteConfig)
      const values = Object.fromEntries(
        Object.entries(rawValues).map((alfa) => {
          const key = alfa[0]
          const value = alfa[1].asBoolean()

          return [key, value]
        })
      )

      const valuesParsed = remoteConfigContextSchema.safeParse(values)

      if (valuesParsed.success) {
        setConfig(valuesParsed.data)
      }
    }

    start()
  }, [])

  console.log(config)

  return (
    <remoteConfigContext.Provider value={config}>
      {children}
    </remoteConfigContext.Provider>
  )
}

const remoteConfigContextSchema = object({
  christmas2021: boolean(),
  i18n: boolean(),
  deliveryAndPayments: boolean(),
  products: boolean(),
  viewProduct: boolean(),
  cart: boolean(),
  checkoutDetails: boolean(),
  checkoutDelivery: boolean(),
  checkoutPayment: boolean(),
  checkoutResult: boolean(),
  order: boolean(),
  signIn: boolean(),
  signUp: boolean(),
  contact: boolean(),
  signedOut: boolean(),
  howToCreateOrder: boolean(),
  documents: boolean(),
  customer: boolean(),
  christmas: boolean(),
  adminOrders: boolean(),
  adminIcons: boolean(),
  adminLabels: boolean(),
  adminCallbacks: boolean(),
  adminDeliveryTypes: boolean(),
  adminPaymentTypes: boolean(),
  adminMolds: boolean(),
  home: boolean(),
  _404: boolean()
})

export type RemoteConfigContext = TypeOf<typeof remoteConfigContextSchema>

export const remoteConfigContext = createContext<RemoteConfigContext>(init)

export default RemoteConfigProvider
