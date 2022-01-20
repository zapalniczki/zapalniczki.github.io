import { fetchAndParseRemoteConfig, RemoteConfig } from 'braty-common'
import { initializeApp } from 'firebase/app'
import { useDev } from 'hooks'
import React, { createContext, ReactNode, useEffect, useState } from 'react'

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

initializeApp(firebaseConfig)

const init: RemoteConfig = {
  _404: true,
  adminCallbacks: false,
  adminDeliveryTypes: false,
  adminIcons: false,
  adminMarketing: true,
  adminLabels: false,
  adminMolds: false,
  adminOrders: true,
  adminPaymentTypes: false,
  cart: true,
  checkoutDelivery: true,
  checkoutDetails: true,
  checkoutPayment: true,
  checkoutResult: true,
  christmas2021: false,
  christmas: false,
  companyOffer: false,
  contact: true,
  customer: false,
  deliveryAndPayments: false,
  documents: false,
  home: true,
  howToCreateOrder: false,
  order: true,
  products: true,
  signIn: false,
  signUp: false,
  signedOut: false,
  valentinesDay: false,
  viewProduct: true,
  // HOME
  homeFeaturedCount: 6,
  homeBestsellersDisplay: false,
  homeFeaturedDisplay: false,
  homeCatalogueDisplay: false,
  homeValentinesDayOrder: 0,
  homeFeaturedOrder: 0,
  homeCatalogueOrder: 0,
  homeBestsellersOrder: 0,
  // DATA
  catalogue_cover: '',
  catalogue_link: '',
  // REST
  i18n: false,
  snow: false,
  vouchers: false
}

type Props = {
  children: ReactNode
}

const RemoteConfigProvider = ({ children }: Props) => {
  const isDev = useDev()
  const [config, setConfig] = useState<RemoteConfig>(init)

  useEffect(() => {
    const start = async () => {
      const remoteConfig = await fetchAndParseRemoteConfig(isDev)

      setConfig(remoteConfig)
    }

    start()
  }, [])

  return (
    <remoteConfigContext.Provider value={config}>
      {children}
    </remoteConfigContext.Provider>
  )
}

export const remoteConfigContext = createContext<RemoteConfig>(init)

export default RemoteConfigProvider
