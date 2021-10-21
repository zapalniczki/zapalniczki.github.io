import { useScrollTop, useTabTitle } from 'hooks'
import React, { useContext, useState } from 'react'
import { useTranslation } from 'hooks'
import { Redirect } from 'react-router-dom'
import { Formik, Form as FormikForm } from 'formik'
import { CHECKOUT_PRODUCTS } from 'constants/routes'
import { Switch, Flexbox, Page } from 'components'
import { checkoutContext } from 'providers'
import styled from 'styled-components'
import { StepTitle, Actions, Wrapper, StepTracker } from '../common'
import useForm from './useForm'
import Form from './Form'
import { IsCompany } from 'types/index2'

const CheckoutDetails = () => {
  const { t } = useTranslation('CHECKOUT_DETAILS')
  const { t: commonT } = useTranslation('COMMON')
  const { checkout } = useContext(checkoutContext)

  useTabTitle(t('title'))
  useScrollTop()

  const [isCompany, setIsCompany] = useState<IsCompany>(
    checkout.contact_details?.is_company || true
  )

  const { getSchema, initialValues, onSubmitForm } = useForm()

  if (!checkout.products) {
    return <Redirect to={CHECKOUT_PRODUCTS} />
  }

  return (
    <Page>
      <StepTracker />

      <Wrapper>
        <StepTitle>{t('title')}</StepTitle>

        <Flexbox
          alignItems="center"
          justifyContent="center"
          marginBottom="m-size"
          marginTop="m-size"
        >
          <CustomTypeButton onClick={() => setIsCompany(true)}>
            {commonT('customerTypes.COMPANY')}
          </CustomTypeButton>

          <Switch
            checked={!isCompany}
            onChange={(checked) => setIsCompany(!checked)}
          />

          <CustomTypeButton onClick={() => setIsCompany(false)}>
            {commonT('customerTypes.INDIVIDUAL')}
          </CustomTypeButton>
        </Flexbox>

        <Formik
          initialValues={initialValues}
          onSubmit={(form) => onSubmitForm(form, isCompany)}
          validateOnChange
          validationSchema={getSchema(isCompany)}
        >
          {({ handleSubmit, values }) => {
            console.log(values)

            return (
              <FormikForm onSubmit={handleSubmit}>
                <Form isCompany={isCompany} />
                <Actions />
              </FormikForm>
            )
          }}
        </Formik>
      </Wrapper>
    </Page>
  )
}

const CustomTypeButton = styled.button`
  width: 50%;
  height: 5rem;
  background: none;
  border: none;
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
`

export default CheckoutDetails
