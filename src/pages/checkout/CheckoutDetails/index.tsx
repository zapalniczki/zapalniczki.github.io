import { Page, Switch } from 'components'
import { CHECKOUT_PRODUCTS } from 'constants/routes'
import { Form as FormikForm, Formik } from 'formik'
import { useScrollTop, useTabTitle, useTranslation } from 'hooks'
import { User } from 'models'
import { checkoutContext } from 'providers'
import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Actions, StepTitle, StepTracker, Wrapper } from '../common'
import Form from './Form'
import useForm from './useForm'

const CheckoutDetails = () => {
  const { t } = useTranslation('CHECKOUT_DETAILS')
  const { t: commonT } = useTranslation('COMMON')
  const { checkout, isBasketEmpty } = useContext(checkoutContext)

  useTabTitle(t('title'))
  useScrollTop()

  const [isCompany, setIsCompany] = useState<boolean>(
    checkout.contact_details ? !!checkout.contact_details.nip : true
  )

  const { getSchema, initialValues, onSubmitForm } = useForm()

  if (isBasketEmpty) {
    return <Redirect to={CHECKOUT_PRODUCTS} />
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
          validationSchema={getSchema(isCompany)}
        >
          {({ handleSubmit, setFieldValue }) => (
            <>
              <Switch
                checked={!isCompany}
                justifyContent="flex-end"
                label={commonT('customerTypes.INDIVIDUAL')}
                marginY="l-size"
                onChange={(checked) => {
                  // TODO Add eslint for curly brackets in arrow functions
                  setIsCompany(!checked)

                  if (checked) {
                    setFieldValue('nip', '')
                  }
                }}
              />

              <FormikForm onSubmit={handleSubmit}>
                <Form isCompany={isCompany} />

                <Actions />
              </FormikForm>
            </>
          )}
        </Formik>
      </Wrapper>
    </Page>
  )
}

export default CheckoutDetails
