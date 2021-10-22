import { Page } from 'components'
import { CHECKOUT_DELIVERY } from 'constants/routes'
import { Form as FormikForm, Formik } from 'formik'
import { useScrollTop, useTabTitle, useTranslation } from 'hooks'
import { checkoutContext } from 'providers'
import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { Actions, StepTitle, StepTracker, Wrapper } from '../common'
import Form from './Form'
import useForm from './useForm'

const CheckoutShipping = () => {
  const { t } = useTranslation('CHECKOUT_SHIPPING')
  const { checkout } = useContext(checkoutContext)

  useTabTitle(t('title'))
  useScrollTop()

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
