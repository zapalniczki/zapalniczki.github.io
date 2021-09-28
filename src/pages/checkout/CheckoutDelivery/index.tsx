import { useScrollTop, useTabTitle } from 'hooks'
import React, { useContext } from 'react'
import { useTranslation } from 'hooks'
import { Formik, Form as FormikForm } from 'formik'
import { Redirect } from 'react-router-dom'
import { Page, QueryLoader } from 'components'
import { CHECKOUT_DETAILS } from 'constants/routes'
import { checkoutContext } from 'providers/CheckoutProvider'
import Actions from '../common/Actions'
import { StepTracker, Wrapper, Total, StepTitle } from '../common'

import useForm from './useForm'
import Form from './Form'
import { useGetDeliveryTypes } from 'api'

const CheckoutDelivery = () => {
  const { t } = useTranslation('CHECKOUT_DELIVERY')

  useTabTitle(t('title'))
  useScrollTop()

  const deliveryTypesQuery = useGetDeliveryTypes()
  const { checkout } = useContext(checkoutContext)
  const { schema, onSubmitForm, initialValues } = useForm()

  if (!checkout.contactDetails2) {
    return <Redirect to={CHECKOUT_DETAILS} />
  }

  return (
    <Page>
      <StepTracker />

      <Wrapper>
        <StepTitle>{t('title')}</StepTitle>
        <QueryLoader query={deliveryTypesQuery}>
          {(deliveryTypes) => (
            <Formik
              initialValues={initialValues}
              validateOnChange
              validationSchema={schema}
              onSubmit={(values) => onSubmitForm(values, deliveryTypes)}
            >
              {({ handleSubmit, values }) => {
                const delivery = deliveryTypes.find(
                  (type) => type.label === values.deliveryType
                )

                return (
                  <FormikForm onSubmit={handleSubmit}>
                    <Form deliveryTypes={deliveryTypes} />

                    <Total customDelivery={delivery?.price} />

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

export default CheckoutDelivery
