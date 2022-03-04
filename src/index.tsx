import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faBox } from '@fortawesome/free-solid-svg-icons/faBox'
import { faBoxes } from '@fortawesome/free-solid-svg-icons/faBoxes'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons/faBoxOpen'
import { faBuilding } from '@fortawesome/free-solid-svg-icons/faBuilding'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons/faCalendarAlt'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons/faCartArrowDown'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import { faCookieBite } from '@fortawesome/free-solid-svg-icons/faCookieBite'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons/faEnvelopeOpenText'
import { faEquals } from '@fortawesome/free-solid-svg-icons/faEquals'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons/faExchangeAlt'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle'
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons/faFileInvoice'
import { faGift } from '@fortawesome/free-solid-svg-icons/faGift'
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons/faHandHoldingUsd'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkedAlt'
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons/faPencilAlt'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons/faPhoneAlt'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faQuestion } from '@fortawesome/free-solid-svg-icons/faQuestion'
import { faReceipt } from '@fortawesome/free-solid-svg-icons/faReceipt'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons/faShoppingBasket'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt'
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import { faStoreAlt } from '@fortawesome/free-solid-svg-icons/faStoreAlt'
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt'
import { faTruck } from '@fortawesome/free-solid-svg-icons/faTruck'
import { faTruckLoading } from '@fortawesome/free-solid-svg-icons/faTruckLoading'
import { faUniversity } from '@fortawesome/free-solid-svg-icons/faUniversity'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons/faUserAlt'
import { faUserClock } from '@fortawesome/free-solid-svg-icons/faUserClock'
import { envs, i18n } from 'config'
import {
  AuthProvider,
  CheckoutProvider,
  LoaderProvider,
  RemoteConfigProvider,
  ToastProvider,
  TogglesProvider
} from 'providers'
import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import ReactGA from 'react-ga'
import { I18nextProvider } from 'react-i18next'
import { QueryClient, QueryClientProvider } from 'react-query'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from 'styles'
import { App } from './pages'

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
  faHeart,
  faCircleNotch
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
