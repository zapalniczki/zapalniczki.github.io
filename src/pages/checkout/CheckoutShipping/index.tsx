import { useScrollTop, useTabTitle } from 'hooks'
import React, { useContext } from 'react'
import { useTranslation } from 'hooks'
import { Formik, Form as FormikForm } from 'formik'
import { Page } from 'components'
import { checkoutContext } from 'providers'
import { Redirect } from 'react-router-dom'
import { CHECKOUT_DELIVERY } from 'constants/routes'
import { StepTracker, Wrapper, Actions, StepTitle } from '../common'

import useForm from './useForm'
import Form from './Form'

const CheckoutShipping = () => {
  const { t } = useTranslation('CHECKOUT_SHIPPING')

  useTabTitle(t('title'))
  useScrollTop()

  const { checkout } = useContext(checkoutContext)

  const { initialValues, onSubmitForm, schema } = useForm()

  if (!checkout.delivery_type) {
    return <Redirect to={CHECKOUT_DELIVERY} />
  }

  return (
    <Page>
      <StepTracker />

      <Wrapper>
        <StepTitle>{t('title')}</StepTitle>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmitForm}
          validateOnChange
          validationSchema={schema}
        >
          {({ handleSubmit }) => (
            <FormikForm onSubmit={handleSubmit}>
              <Form />
              <Actions />
            </FormikForm>
          )}
        </Formik>
      </Wrapper>
    </Page>
  )
}

export default CheckoutShipping
