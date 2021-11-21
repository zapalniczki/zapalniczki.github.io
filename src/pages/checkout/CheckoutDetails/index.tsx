import { BackButton, Columns, Heading, Page, Switch } from 'components'
import { CART } from 'constants/routes'
import { Form as FormikForm, Formik } from 'formik'
import { useScrollTop, usePageTitle, useTranslation } from 'hooks'
import { StepTracker, CheckoutTotal } from 'organisms'
import { checkoutContext } from 'providers'
import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Form from './Form'
import useForm from './useForm'

const CheckoutDetails = () => {
  const { t } = useTranslation('CHECKOUT_DETAILS')
  const { t: commonT } = useTranslation('COMMON')
  const { checkout, isBasketEmpty } = useContext(checkoutContext)

  usePageTitle(t('title'))
  useScrollTop()

  const [isCompany, setIsCompany] = useState<boolean>(
    checkout.contact_details ? !!checkout.contact_details.nip : true
  )

  const { getSchema, initialValues, onSubmitForm } = useForm()

  if (isBasketEmpty) {
    return <Navigate to={CART} />
  }

  return (
    <Page>
      <BackButton label={t('back')} to={CART} />

      <StepTracker />

      <Heading level={4} marginBottom="l-size">
        {t('title')}
      </Heading>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmitForm}
        validateOnChange
        validationSchema={getSchema(isCompany)}
      >
        {({ setFieldValue }) => (
          <FormikForm>
            <Columns>
              <div>
                <Switch
                  checked={!isCompany}
                  justifyContent="flex-end"
                  label={commonT('customerTypes.INDIVIDUAL')}
                  onChange={(checked) => {
                    // TODO Add eslint for curly brackets in arrow functions
                    setIsCompany(!checked)

                    if (checked) {
                      setFieldValue('nip', '')
                    }
                  }}
                />

                <Form isCompany={isCompany} />
              </div>

              <div>
                <CheckoutTotal />
              </div>
            </Columns>
          </FormikForm>
        )}
      </Formik>
    </Page>
  )
}

export default CheckoutDetails
