import {
  AuthProvider,
  BasketProvider,
  BasketToggleProvider,
  CheckoutProvider,
  LoaderProvider
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

import { faPencilAlt } from '@fortawesome/free-solid-svg-icons/faPencilAlt'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faStoreAlt } from '@fortawesome/free-solid-svg-icons/faStoreAlt'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons/faShoppingBasket'
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'
import { faQuestion } from '@fortawesome/free-solid-svg-icons/faQuestion'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkedAlt'
import { faUniversity } from '@fortawesome/free-solid-svg-icons/faUniversity'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons/faPhoneAlt'
import { faBox } from '@fortawesome/free-solid-svg-icons/faBox'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faEquals } from '@fortawesome/free-solid-svg-icons/faEquals'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons/faCalendarAlt'
import { faTruckLoading } from '@fortawesome/free-solid-svg-icons/faTruckLoading'
import { faBoxes } from '@fortawesome/free-solid-svg-icons/faBoxes'
import { faTruck } from '@fortawesome/free-solid-svg-icons/faTruck'
import { faUserClock } from '@fortawesome/free-solid-svg-icons/faUserClock'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons/faExchangeAlt'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons/faBoxOpen'
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons/faHandHoldingUsd'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons/faEnvelopeOpenText'
import { faReceipt } from '@fortawesome/free-solid-svg-icons/faReceipt'

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
  faTimesCircle,
  faPencilAlt,
  faReceipt
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
                  <LoaderProvider>
                    <GlobalStyle />
                    <App />
                  </LoaderProvider>
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
