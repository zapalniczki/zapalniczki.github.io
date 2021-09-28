import { useScrollTop, useTabTitle } from 'hooks'
import React, { useContext, useState } from 'react'
import { useTranslation } from 'hooks'
import { Redirect } from 'react-router-dom'
import { Formik, Form as FormikForm } from 'formik'
import { CHECKOUT_PRODUCTS } from 'constants/routes'
import { Flexbox, Page } from 'components'
import { checkoutContext } from 'providers/CheckoutProvider'
import Switch from 'react-switch'
import styled from 'styled-components'
import { StepTitle, Actions, Wrapper, StepTracker } from '../common'
import useForm from './useForm'
import Form from './Form'
import { IsCompany } from 'Types'

const CheckoutDetails = () => {
  const { t } = useTranslation('CHECKOUT_DETAILS')
  const { t: commonT } = useTranslation('COMMON')
  const { checkout } = useContext(checkoutContext)

  useTabTitle(t('title'))
  useScrollTop()

  const [isCompany, setIsCompany] = useState<IsCompany>(
    checkout.contactDetails2?.isCompany || true
  )

  const { onSubmitForm, initialValues, getSchema } = useForm()

  if (!checkout.products2) {
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
            checkedIcon={false}
            offColor="#e1e1e1"
            onChange={(checked) => setIsCompany(!checked)}
            onColor="#e1e1e1"
            uncheckedIcon={false}
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
          {({ handleSubmit }) => (
            <FormikForm onSubmit={handleSubmit}>
              <Form isCompany={isCompany} />
              <Actions />
            </FormikForm>
          )}
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
