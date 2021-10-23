import React, { useContext } from 'react'
import { Formik, Form as FormikForm, Field, FieldProps } from 'formik'
import { basketContext } from 'providers'
import useForm, { FormValues } from './useForm'
import { GetProductResponse } from 'models'
import { useTranslation } from 'hooks'
import { Button, Flexbox, NumberInput } from 'components'

type Props = {
  product: GetProductResponse
}

const Form = ({ product }: Props) => {
  const { t } = useTranslation('VIEW_PRODUCT')
  const { getProductFromBasket } = useContext(basketContext)
  const isInBasket = getProductFromBasket(product.id)

  const { initialValues, schema, submitForm } = useForm(product)

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validateOnChange
      validationSchema={schema}
    >
      {({ errors, isValid }) => {
        console.log(errors)

        return (
          <FormikForm>
            <Flexbox>
              <Field name="product_quantity" type="numer">
                {(
                  props: FieldProps<FormValues['product_quantity'], FormValues>
                ) => <NumberInput {...props} max={100} min={1} />}
              </Field>

              <Button
                disabled={!isValid}
                label={
                  // isInBasket
                  //   ? t('actions.removeFromBasket')
                  // :
                  t('actions.addToBasket')
                }
                marginLeft="m-size"
                size="medium"
                type="submit"
                variant="primary"
              />
            </Flexbox>
          </FormikForm>
        )
      }}
    </Formik>
  )
}

export default Form
