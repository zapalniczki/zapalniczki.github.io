import { useScrollTop, useTabTitle } from 'hooks'
import React, { useContext, useState } from 'react'
import { useTranslation } from 'hooks'
import { Formik, Form as FormikForm } from 'formik'
import { Text, Page, Flexbox, Switch } from 'components'
import { checkoutContext } from 'providers'
import { Redirect } from 'react-router-dom'
import { CHECKOUT_DELIVERY } from 'constants/routes'
import { StepTracker, Wrapper, Actions, StepTitle } from '../common'

import useForm from './useForm'
import Form from './Form'

const CheckoutShipping = () => {
  const { t } = useTranslation('CHECKOUT_SHIPPING')
  const { checkout } = useContext(checkoutContext)

  useTabTitle(t('title'))
  useScrollTop()

  const [sameAddressAsInvoice, setSameAddressAsInvoice] = useState(
    checkout.same_address_as_invoice
  )

  const { initialValues, onSubmitForm, schema } = useForm()

  if (!checkout.delivery_type) {
    return <Redirect to={CHECKOUT_DELIVERY} />
  }

  return (
    <Page>
      <StepTracker />

      <Wrapper>
        <StepTitle>{t('title')}</StepTitle>

        <Flexbox alignItems="center" justifyContent="flex-end" marginY="l-size">
          <Text marginRight="m-size" textAlign="center" type="body-2">
            {t('info')}
          </Text>
          <Switch
            checked={!sameAddressAsInvoice}
            onChange={(checked) => setSameAddressAsInvoice(!checked)}
          />
        </Flexbox>

        <Formik
          initialValues={initialValues}
          onSubmit={(values) => onSubmitForm(values, sameAddressAsInvoice)}
          validateOnChange
          validationSchema={schema}
        >
          {({ handleSubmit }) => (
            <FormikForm onSubmit={handleSubmit}>
              {!sameAddressAsInvoice && <Form />}
              <Actions />
            </FormikForm>
          )}
        </Formik>
      </Wrapper>
    </Page>
  )
}

export default CheckoutShipping
