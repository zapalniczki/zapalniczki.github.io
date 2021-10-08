import React, { useContext } from 'react'
import { Formik, Form as FormikForm } from 'formik'
import { basketContext } from 'providers'
import useForm from './useForm'
import { SubmitButton } from '../common'
import { GetProductResponse } from 'api'
import AvilabilityIndicator from './AvilabilityIndicator'

type Props = {
  product: GetProductResponse
}

const Form = ({ product }: Props) => {
  const { getProductFromBasket } = useContext(basketContext)
  const { initialValues, schema, submitForm } = useForm(product)
  const isInBasket = !!getProductFromBasket(product.id)

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validateOnChange
      validationSchema={schema}
    >
      {() => (
        <FormikForm>
          <SubmitButton isInBasket={isInBasket} />
          <AvilabilityIndicator status={product.mold.status} />
        </FormikForm>
      )}
    </Formik>
  )
}

export default Form
