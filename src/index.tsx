import { initializeApp } from '@firebase/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { faBox } from '@fortawesome/free-solid-svg-icons/faBox'
import { faBoxes } from '@fortawesome/free-solid-svg-icons/faBoxes'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons/faBoxOpen'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons/faCalendarAlt'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons/faEnvelopeOpenText'
import { faEquals } from '@fortawesome/free-solid-svg-icons/faEquals'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons/faExchangeAlt'
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons/faHandHoldingUsd'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkedAlt'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons/faPencilAlt'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons/faPhoneAlt'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faQuestion } from '@fortawesome/free-solid-svg-icons/faQuestion'
import { faReceipt } from '@fortawesome/free-solid-svg-icons/faReceipt'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons/faShoppingBasket'
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import { faStoreAlt } from '@fortawesome/free-solid-svg-icons/faStoreAlt'
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt'
import { faTruck } from '@fortawesome/free-solid-svg-icons/faTruck'
import { faTruckLoading } from '@fortawesome/free-solid-svg-icons/faTruckLoading'
import { faUniversity } from '@fortawesome/free-solid-svg-icons/faUniversity'
import { faUserClock } from '@fortawesome/free-solid-svg-icons/faUserClock'
import config from 'firebase/config'
import i18n from 'i18n/config'
import {
  AuthProvider,
  BasketProvider,
  BasketToggleProvider,
  CheckoutProvider,
  LoaderProvider,
  ToastProvider
} from 'providers'
import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import { I18nextProvider } from 'react-i18next'
import 'react-phone-input-2/lib/style.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/GlobalStyle'
import theme from 'styles/theme'
import webfontloader from 'webfontloader'
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
  faReceipt,
  faTrashAlt
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
                    <ToastProvider>
                      <GlobalStyle />

                      <App />
                    </ToastProvider>
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
