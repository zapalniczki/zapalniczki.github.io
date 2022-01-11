import { getPaymentTypes } from 'api'
import { DB_TABLES } from 'braty-common'
import { BackButton, Columns, Heading, Page, QueryLoader } from 'components'
import { ROUTES } from 'braty-common'
import { Form as FormikForm, Formik } from 'formik'
import { usePageTitle, useScrollTop, useTranslation } from 'hooks'
import { CheckoutTotal, StepTracker } from 'organisms'
import { checkoutContext } from 'providers'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { Navigate } from 'react-router-dom'
import Form from './Form'
import Loader from './index.loader'
import useForm from './useForm'

const CheckoutPayment = () => {
  const { t } = useTranslation('CHECKOUT_PAYMENT')

  usePageTitle(t('title'))
  useScrollTop()

  const { checkout } = useContext(checkoutContext)

  const params = { in_person: !!checkout.delivery_type_allows_cash_payment }

  const paymentTypesQuery = useQuery([DB_TABLES.PAYMENT_TYPE, params], () =>
    getPaymentTypes(params)
  )
  const { initialValues, onSubmit, schema } = useForm()

  if (!checkout.delivery_type) {
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
        {(paymentTypes) => (
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validateOnChange
            validationSchema={schema}
          >
            {({ values }) => {
              const paymentType = paymentTypes.find(
                (type) => type.id === values.payment_type
              )

              return (
                <FormikForm>
                  <Columns>
                    <div>
                      <Form paymentTypes={paymentTypes} />
                    </div>

                    <div>
                      <CheckoutTotal customPayment={paymentType?.price} />
                    </div>
                  </Columns>
                </FormikForm>
              )
            }}
          </Formik>
        )}
      </QueryLoader>
    </Page>
  )
}

export default CheckoutPayment
