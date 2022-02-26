import { getPaymentTypes } from 'api'
import { DB_TABLES, ROUTES } from 'braty-common'
import { BackButton, Heading, Page, QueryLoader } from 'components'
import { usePageTitle, useScrollTop, useTranslation } from 'hooks'
import { StepTracker } from 'organisms'
import { checkoutContext } from 'providers'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { Navigate } from 'react-router-dom'
import FormWrapper from './FormWrapper'
import Loader from './index.loader'

const CheckoutPayment = () => {
  const { t } = useTranslation('CHECKOUT_PAYMENT')

  usePageTitle(t('title'))
  useScrollTop()

  const { checkout } = useContext(checkoutContext)

  const isPoland = checkout.contact_details?.country === 'POLAND'
  const cashPayment = checkout.delivery_type_allows_cash_payment

  const params = {
    in_person: cashPayment === null ? undefined : !!cashPayment,
    ...(isPoland ? { domestic: true } : { abroad: true })
  }

  const paymentTypesQuery = useQuery([DB_TABLES.PAYMENT_TYPE, params], () =>
    getPaymentTypes(params)
  )

  if (!checkout.delivery_type || !checkout.processStarted) {
    return <Navigate to={ROUTES.CHECKOUT_DELIVERY} />
  }

  return (
    <Page>
      <BackButton label={t('back')} to={ROUTES.CHECKOUT_DELIVERY} />

      <StepTracker />

      <Heading level={4} marginBottom="l-size">
        {t('title')}
      </Heading>

      <QueryLoader Loader={<Loader />} query={paymentTypesQuery}>
        {(paymentTypes) => <FormWrapper paymentTypes={paymentTypes} />}
      </QueryLoader>
    </Page>
  )
}

export default CheckoutPayment
