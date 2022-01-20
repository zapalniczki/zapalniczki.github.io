import React, { ReactNode, useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { createContext } from 'react'
import {
  remoteConfig as remoteConfigSchema,
  RemoteConfig,
  getTypeOfRemoteConfigKey
} from 'braty-common'

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

import {
  getRemoteConfig,
  getAll,
  fetchAndActivate
} from 'firebase/remote-config'
import { ZodFirstPartyTypeKind } from 'zod'
import { useDev } from 'hooks'

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
    async function fetchAndParseRemoteConfig() {
      const remoteConfig = getRemoteConfig()
      remoteConfig.settings = {
        minimumFetchIntervalMillis: isDev ? 2000 : 43200000,
        fetchTimeoutMillis: 6000
      }

      await fetchAndActivate(remoteConfig)

      const rawValues = getAll(remoteConfig)
      const values = Object.fromEntries(
        Object.entries(rawValues).map(([key, value]) => {
          const valueType = getTypeOfRemoteConfigKey(key)

          let valueParsed
          if (valueType === ZodFirstPartyTypeKind.ZodNumber) {
            valueParsed = value.asNumber()
          } else if (valueType === ZodFirstPartyTypeKind.ZodBoolean) {
            valueParsed = value.asBoolean()
          } else {
            valueParsed = value.asString()
          }

          return [key, valueParsed]
        })
      )

      const valuesParsed = remoteConfigSchema.safeParse(values)

      if (valuesParsed.success) {
        setConfig(valuesParsed.data)
      } else {
        throw new Error(valuesParsed.error.toString())
      }
    }

    fetchAndParseRemoteConfig()
  }, [])

  return (
    <remoteConfigContext.Provider value={config}>
      {children}
    </remoteConfigContext.Provider>
  )
}

export const remoteConfigContext = createContext<RemoteConfig>(init)

export default RemoteConfigProvider
