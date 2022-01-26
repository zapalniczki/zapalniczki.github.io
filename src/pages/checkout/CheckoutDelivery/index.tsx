import { getDeliveryTypes } from 'api'
import { DB_TABLES, ROUTES } from 'braty-common'
import {
  BackButton,
  Columns,
  Heading,
  Page,
  QueryLoader,
  Switch
} from 'components'
import { Form as FormikForm, Formik } from 'formik'
import { usePageTitle, useScrollTop, useTranslation } from 'hooks'
import { CheckoutTotal, StepTracker } from 'organisms'
import { checkoutContext } from 'providers'
import React, { useContext, useState } from 'react'
import { useQuery } from 'react-query'
import { Navigate } from 'react-router-dom'
import Form from './Form'
import Loader from './index.loader'
import ShippingForm from './ShippingForm'
import useForm from './useForm'

const CheckoutDelivery = () => {
  const { t } = useTranslation('CHECKOUT_DELIVERY')
  const { checkout, setCheckout } = useContext(checkoutContext)

  usePageTitle(t('title'))
  useScrollTop()

  const isPoland = checkout.contact_details?.country === 'POLAND'
  const params = { ...(isPoland && { domestic: true }) }
  const deliveryTypesQuery = useQuery([DB_TABLES.DELIVERY_TYPES, params], () =>
    getDeliveryTypes(params)
  )
  const { initialValues, onSubmitForm, schema } = useForm()

  const [sameAddressAsInvoice, setSameAddressAsInvoice] = useState<boolean>(
    checkout.same_address_as_invoice !== null
      ? checkout.same_address_as_invoice
      : true
  )

  if (!checkout.contact_details) {
    return <Navigate to={ROUTES.CHECKOUT_DETAILS} />
  }

  return (
    <Page>
      <BackButton label={t('back')} to={ROUTES.CHECKOUT_DETAILS} />

      <StepTracker />

      <Heading level={4} marginBottom="l-size">
        {t('title')}
      </Heading>

      <QueryLoader Loader={<Loader />} query={deliveryTypesQuery}>
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
                  <Columns>
                    <div>
                      <Form deliveryTypes={deliveryTypes} />

                      {shouldSwitchBeDisplayed && (
                        <Switch
                          checked={!sameAddressAsInvoice}
                          flexDirection="row-reverse"
                          justifyContent="flex-end"
                          label={t('sameAddress')}
                          marginTop="l-size"
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

                      {!sameAddressAsInvoice && <ShippingForm />}
                    </div>

                    <div>
                      <CheckoutTotal customDelivery={delivery?.price} />
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

export default CheckoutDelivery
