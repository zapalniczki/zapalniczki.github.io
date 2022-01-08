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
import {
  string,
  boolean,
  number,
  object,
  TypeOf,
  ZodFirstPartyTypeKind
} from 'zod'
import { useDev } from 'hooks'

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
  snow: false
}

type Props = {
  children: ReactNode
}

const RemoteConfigProvider = ({ children }: Props) => {
  const isDev = useDev()
  const [config, setConfig] = useState<RemoteConfigContext>(init)

  useEffect(() => {
    async function start() {
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

      const valuesParsed = remoteConfigContextSchema.safeParse(values)

      if (valuesParsed.success) {
        setConfig(valuesParsed.data)
      } else {
        throw new Error(valuesParsed.error.toString())
      }
    }

    start()
  }, [])

  return (
    <remoteConfigContext.Provider value={config}>
      {children}
    </remoteConfigContext.Provider>
  )
}

const remoteConfigContextSchema = object({
  _404: boolean(),
  adminCallbacks: boolean(),
  adminDeliveryTypes: boolean(),
  adminIcons: boolean(),
  adminLabels: boolean(),
  adminMolds: boolean(),
  adminOrders: boolean(),
  adminPaymentTypes: boolean(),
  cart: boolean(),
  checkoutDelivery: boolean(),
  checkoutDetails: boolean(),
  checkoutPayment: boolean(),
  checkoutResult: boolean(),
  christmas2021: boolean(),
  christmas: boolean(),
  contact: boolean(),
  customer: boolean(),
  deliveryAndPayments: boolean(),
  documents: boolean(),
  home: boolean(),
  howToCreateOrder: boolean(),
  order: boolean(),
  products: boolean(),
  signIn: boolean(),
  signUp: boolean(),
  signedOut: boolean(),
  valentinesDay: boolean(),
  viewProduct: boolean(),
  // HOME
  homeFeaturedCount: number(),
  homeBestsellersDisplay: boolean(),
  homeFeaturedDisplay: boolean(),
  homeCatalogueDisplay: boolean(),
  homeValentinesDayOrder: number(),
  homeFeaturedOrder: number(),
  homeCatalogueOrder: number(),
  homeBestsellersOrder: number(),
  // DATA
  catalogue_cover: string(),
  catalogue_link: string(),
  // REST
  snow: boolean(),
  i18n: boolean()
})

export type RemoteConfigContext = TypeOf<typeof remoteConfigContextSchema>

export const remoteConfigContext = createContext<RemoteConfigContext>(init)

export default RemoteConfigProvider

const getTypeOfRemoteConfigKey = (query: string) => {
  const remoteConfigKeysWithTypes = Object.entries(
    remoteConfigContextSchema._getCached().shape
  ).map(([key, value]) => ({
    key,
    type: value._def.typeName
  }))

  const thisKey = remoteConfigKeysWithTypes.find((key) => key.key === query)

  if (!thisKey) {
    return undefined
  }

  return thisKey.type
}
