import { useScrollTop, useTabTitle } from 'hooks'
import React, { useContext, useState } from 'react'
import { useTranslation } from 'hooks'
import { Formik, Form as FormikForm } from 'formik'
import { Redirect } from 'react-router-dom'
import { Page, QueryLoader, Switch } from 'components'
import { CHECKOUT_DETAILS } from 'constants/routes'
import { checkoutContext } from 'providers'
import Actions from '../common/Actions'
import { StepTracker, Wrapper, Total, StepTitle } from '../common'

import useForm from './useForm'
import Form from './Form'
import { getDeliveryTypes } from 'api'
import { useQuery } from 'react-query'
import { DELIVERY_TYPES_TABLE } from 'constants/db_tables'

const CheckoutDelivery = () => {
  const { t } = useTranslation('CHECKOUT_DELIVERY')

  useTabTitle(t('title'))
  useScrollTop()

  const deliveryTypesQuery = useQuery(DELIVERY_TYPES_TABLE, getDeliveryTypes)
  const { checkout, setCheckout } = useContext(checkoutContext)
  const { initialValues, onSubmitForm, schema } = useForm()

  const [sameAddressAsInvoice, setSameAddressAsInvoice] = useState<boolean>(
    checkout.same_address_as_invoice ? checkout.same_address_as_invoice : true
  )

  if (!checkout.contact_details) {
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
              onSubmit={(values) =>
                onSubmitForm(values, deliveryTypes, sameAddressAsInvoice)
              }
              validateOnChange
              validationSchema={schema}
            >
              {({ handleSubmit, values }) => {
                const delivery = deliveryTypes.find(
                  (type) => type.id === values.delivery_type
                )

                const shouldSwitchBeDisplayed = delivery?.requires_address

                return (
                  <FormikForm onSubmit={handleSubmit}>
                    <Form deliveryTypes={deliveryTypes} />

                    {shouldSwitchBeDisplayed && (
                      <Switch
                        checked={!sameAddressAsInvoice}
                        flexDirection="row-reverse"
                        justifyContent="flex-end"
                        label={t('sameAddress')}
                        marginTop="m-size"
                        onChange={(checked) => {
                          setSameAddressAsInvoice(!checked)

                          if (!checked) {
                            setCheckout((prev) => ({
                              ...prev,
                              shipping: null
                            }))
                          }
                        }}
                      />
                    )}

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
