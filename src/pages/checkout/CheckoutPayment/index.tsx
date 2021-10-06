import { Form as FormikForm, Formik } from 'formik'
import { useScrollTop, useTabTitle } from 'hooks'
import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { useTranslation } from 'hooks'
import { Page, QueryLoader } from 'components'
import { CHECKOUT_DELIVERY } from 'constants/routes'
import { checkoutContext } from 'providers/CheckoutProvider'
import { StepTracker, Actions, StepTitle, Total, Wrapper } from '../common'
import useForm from './useForm'

import Form from './Form'
import { useGetPaymentTypes } from 'api'

const CheckoutPayment = () => {
  const { t } = useTranslation('CHECKOUT_PAYMENT')

  useTabTitle(t('title'))
  useScrollTop()

  const paymentTypesQuery = useGetPaymentTypes()
  const { checkout } = useContext(checkoutContext)
  const { onSubmit, initialValues, schema, isLoading } = useForm()

  if (!checkout.deliveryType2) {
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
              {({ handleSubmit }) => (
                <FormikForm onSubmit={handleSubmit}>
                  <Form paymentTypes={paymentTypes} />
                  <Total />
                  <Actions primaryDisabled={isLoading} />
                </FormikForm>
              )}
            </Formik>
          )}
        </QueryLoader>
      </Wrapper>
    </Page>
  )
}

export default CheckoutPayment