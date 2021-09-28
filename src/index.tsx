import {
  AuthProvider,
  BasketProvider,
  BasketToggleProvider,
  CheckoutProvider,
  LoaderProvider,
  RemoteConfigProvider
} from 'providers'

import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import 'react-phone-input-2/lib/style.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import webfontloader from 'webfontloader'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18n/config'

import {
  faTruck,
  faUserClock,
  faExchangeAlt,
  faStar,
  faBoxOpen,
  faHandHoldingUsd,
  faEnvelopeOpenText,
  faMapMarkedAlt,
  faUniversity,
  faPhoneAlt,
  faBox,
  faCheckCircle,
  faCheck,
  faPlus,
  faEquals,
  faCalendarAlt,
  faTruckLoading,
  faBoxes,
  faArrowRight,
  faMinus,
  faTimes,
  faArrowLeft,
  faStoreAlt,
  faShoppingBasket,
  faSpinner,
  faQuestion,
  faSearch,
  faChevronLeft,
  faChevronRight,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { initializeApp } from '@firebase/app'
import config from 'firebase/config'
import GlobalStyle from 'styles/GlobalStyle'
import { App } from './pages'

webfontloader.load({
  google: {
    families: ['Roboto:300,400,500,700']
  }
})

library.add(
  faTruck,
  faUserClock,
  faExchangeAlt,
  faStar,
  faBoxOpen,
  faHandHoldingUsd,
  faEnvelopeOpenText,
  faMapMarkedAlt,
  faUniversity,
  faPhoneAlt,
  faBox,
  faCheckCircle,
  faPlus,
  faEquals,
  faCalendarAlt,
  faTruckLoading,
  faBoxes,
  faArrowRight,
  faMinus,
  faTimes,
  faArrowLeft,
  faStoreAlt,
  faShoppingBasket,
  faSpinner,
  faQuestion,
  faSearch,
  faCheck,
  faChevronLeft,
  faChevronRight,
  faTimesCircle
)

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 90000
    }
  }
})

initializeApp(config)

const root = document.getElementById('app')
render(
  <StrictMode>
    <AuthProvider>
      <BasketProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <I18nextProvider i18n={i18n}>
              <CheckoutProvider>
                <BasketToggleProvider>
                  <RemoteConfigProvider>
                    <LoaderProvider>
                      <GlobalStyle />
                      <App />
                    </LoaderProvider>
                  </RemoteConfigProvider>
                </BasketToggleProvider>
              </CheckoutProvider>
            </I18nextProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </BasketProvider>
    </AuthProvider>
  </StrictMode>,
  root
)
