import React, { useContext } from 'react'
import { Formik, Form as FormikForm } from 'formik'
import { basketContext } from 'providers/BasketProvider'
import useForm from './useForm'
import { SubmitButton } from '../common'
import { ProductDetails } from 'api'
import AvilabilityIndicator from './AvilabilityIndicator'

type Props = {
  product: ProductDetails
}

const Form = ({ product }: Props) => {
  const { getProductFromBasket } = useContext(basketContext)
  const { schema, initialValues, submitForm } = useForm(product)
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
          <AvilabilityIndicator mold={product.mold} />
        </FormikForm>
      )}
    </Formik>
  )
}

export default Form
