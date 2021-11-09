import { Form as FormikForm, Formik } from 'formik'
import { useScrollTop, useTabTitle } from 'hooks'
import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { useTranslation } from 'hooks'
import { Page, QueryLoader } from 'components'
import { CHECKOUT_DELIVERY } from 'constants/routes'
import { checkoutContext } from 'providers'
import { StepTracker, Actions, StepTitle, Total, Wrapper } from '../common'
import useForm from './useForm'

import Form from './Form'
import { getPaymentTypes } from 'api'
import { useQuery } from 'react-query'
import { PAYMENT_TYPE_TABLE } from 'constants/db_tables'

const CheckoutPayment = () => {
  const { t } = useTranslation('CHECKOUT_PAYMENT')

  useTabTitle(t('title'))
  useScrollTop()

  const { checkout } = useContext(checkoutContext)

  const params = { in_person: !!checkout.delivery_type_allows_cash_payment }

  const paymentTypesQuery = useQuery([PAYMENT_TYPE_TABLE, params], () =>
    getPaymentTypes(params)
  )
  const { initialValues, onSubmit, schema } = useForm()

  if (!checkout.delivery_type) {
    return <Redirect to={CHECKOUT_DELIVERY} />
  }

  return (
    <Page>
      <StepTracker />

      <Wrapper>
        <StepTitle>{t('title')}</StepTitle>

        <QueryLoader query={paymentTypesQuery}>
          {(paymentTypes) => (
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validateOnChange
              validationSchema={schema}
            >
              {({ handleSubmit, values }) => {
                const paymentType = paymentTypes.find(
                  (type) => type.id === values.payment_type
                )

                return (
                  <FormikForm onSubmit={handleSubmit}>
                    <Form paymentTypes={paymentTypes} />

                    <Total customPayment={paymentType?.price} />

                    <Actions />
                  </FormikForm>
                )
              }}
            </Formik>
          )}
        </QueryLoader>
      </Wrapper>
    </Page>
  )
}

export default CheckoutPayment
