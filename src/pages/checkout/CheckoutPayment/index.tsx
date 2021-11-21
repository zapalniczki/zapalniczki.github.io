import { getPaymentTypes } from 'api'
import { BackButton, Columns, Heading, Page, QueryLoader } from 'components'
import { PAYMENT_TYPE_TABLE } from 'constants/db_tables'
import { CHECKOUT_DELIVERY } from 'constants/routes'
import { Form as FormikForm, Formik } from 'formik'
import { useScrollTop, usePageTitle, useTranslation } from 'hooks'
import { StepTracker, CheckoutTotal } from 'organisms'
import { checkoutContext } from 'providers'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import Form from './Form'
import useForm from './useForm'
import Loader from './index.loader'
import { Navigate } from 'react-router-dom'

const CheckoutPayment = () => {
  const { t } = useTranslation('CHECKOUT_PAYMENT')

  usePageTitle(t('title'))
  useScrollTop()

  const { checkout } = useContext(checkoutContext)

  const params = { in_person: !!checkout.delivery_type_allows_cash_payment }

  const paymentTypesQuery = useQuery([PAYMENT_TYPE_TABLE, params], () =>
    getPaymentTypes(params)
  )
  const { initialValues, onSubmit, schema } = useForm()

  if (!checkout.delivery_type) {
    return <Navigate to={CHECKOUT_DELIVERY} />
  }

  return (
    <Page>
      <BackButton label={t('back')} to={CHECKOUT_DELIVERY} />

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
