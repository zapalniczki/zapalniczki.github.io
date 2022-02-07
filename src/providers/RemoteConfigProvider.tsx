import { fetchAndParseRemoteConfig, RemoteConfig } from 'braty-common'
import { useDev } from 'hooks'
import React, { createContext, ReactNode, useEffect, useState } from 'react'

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
  europe: false,
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
  catalogue_cover_pl: '',
  catalogue_link_pl: '',
  catalogue_cover_en: '',
  catalogue_link_en: '',
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
