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
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons/faFileInvoice'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle'
import { faGift } from '@fortawesome/free-solid-svg-icons/faGift'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons/faCartArrowDown'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons/faUserAlt'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt'
import { faBuilding } from '@fortawesome/free-solid-svg-icons/faBuilding'
import { faCookieBite } from '@fortawesome/free-solid-svg-icons/faCookieBite'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'

import i18n from 'i18n/config'
import {
  AuthProvider,
  TogglesProvider,
  CheckoutProvider,
  LoaderProvider,
  ToastProvider,
  RemoteConfigProvider
} from 'providers'
import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import { I18nextProvider } from 'react-i18next'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/GlobalStyle'
import theme from 'styles/theme'
import { App } from './pages'
import ReactGA from 'react-ga'
import { HashRouter } from 'react-router-dom'
import envs from 'envs'

ReactGA.initialize(envs.measurementId)

library.add(
  faArrowLeft,
  faArrowRight,
  faBars,
  faBox,
  faBoxOpen,
  faBoxes,
  faBuilding,
  faCalendarAlt,
  faCartArrowDown,
  faCheck,
  faCheckCircle,
  faChevronLeft,
  faChevronRight,
  faCookieBite,
  faEnvelopeOpenText,
  faEquals,
  faExchangeAlt,
  faExclamationTriangle,
  faFileInvoice,
  faGift,
  faHandHoldingUsd,
  faHeart,
  faInfoCircle,
  faMapMarkedAlt,
  faMinus,
  faPencilAlt,
  faPhoneAlt,
  faPlus,
  faQuestion,
  faReceipt,
  faSearch,
  faShoppingBasket,
  faSignOutAlt,
  faSpinner,
  faStar,
  faStoreAlt,
  faTimes,
  faTimesCircle,
  faTrashAlt,
  faTruck,
  faTruckLoading,
  faUniversity,
  faUserAlt,
  faUserClock,
  faHeart
)

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 90000
    }
  }
})

const root = document.getElementById('app')
render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <RemoteConfigProvider>
          <AuthProvider>
            <ThemeProvider theme={theme}>
              <I18nextProvider i18n={i18n}>
                <CheckoutProvider>
                  <TogglesProvider>
                    <LoaderProvider>
                      <ToastProvider>
                        <GlobalStyle />

                        <App />
                      </ToastProvider>
                    </LoaderProvider>
                  </TogglesProvider>
                </CheckoutProvider>
              </I18nextProvider>
            </ThemeProvider>
          </AuthProvider>
        </RemoteConfigProvider>
      </HashRouter>
    </QueryClientProvider>
  </StrictMode>,
  root
)
