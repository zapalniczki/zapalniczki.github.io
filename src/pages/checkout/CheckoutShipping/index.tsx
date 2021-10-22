import { useScrollTop, useTabTitle } from 'hooks'
import React, { useContext, useState } from 'react'
import { useTranslation } from 'hooks'
import { Formik, Form as FormikForm } from 'formik'
import { Page, Switch } from 'components'
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

        <Formik
          initialValues={initialValues}
          onSubmit={(values) => onSubmitForm(values, sameAddressAsInvoice)}
          validateOnChange
          validationSchema={schema}
        >
          {({ handleSubmit, initialValues, setFieldValue }) => (
            <>
              <Switch
                checked={!sameAddressAsInvoice}
                justifyContent="flex-end"
                label={t('info')}
                marginY="l-size"
                onChange={(checked) => {
                  setSameAddressAsInvoice(!checked)

                  if (!checked) {
                    setFieldValue(
                      'street_address',
                      initialValues.street_address
                    )
                    setFieldValue('post_code', initialValues.post_code)
                    setFieldValue('city', initialValues.city)
                  }
                }}
              />

              <FormikForm onSubmit={handleSubmit}>
                {!sameAddressAsInvoice && <Form />}

                <Actions />
              </FormikForm>
            </>
          )}
        </Formik>
      </Wrapper>
    </Page>
  )
}

export default CheckoutShipping
