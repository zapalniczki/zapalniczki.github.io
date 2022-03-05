import React, { useContext } from 'react'
import { Formik, Form as FormikForm, Field, FieldProps } from 'formik'
import { checkoutContext } from 'providers'
import useForm, { FormValues } from './useForm'
import { GetProductResponse } from 'models'
import { useTranslation } from 'hooks'
import { Button, NumberInput, Text } from 'components'
import { Flexbox } from '@zapalniczki/shared-components'

type Props = {
  product: GetProductResponse
}

const Form = ({ product }: Props) => {
  const { t } = useTranslation('VIEW_PRODUCT')
  const { getProductFromBasket } = useContext(checkoutContext)
  const isInBasket = getProductFromBasket(product.id)

  const { initialValues, schema, submitForm } = useForm(product)

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validateOnChange
      validationSchema={schema}
    >
      {({ isValid, values }) => {
        const quantityCorrectInBasket =
          isInBasket && isInBasket.quantity === values.product_quantity

        return (
          <FormikForm>
            <Flexbox alignItems="center">
              <Field name="product_quantity" type="numer">
                {(
                  props: FieldProps<FormValues['product_quantity'], FormValues>
                ) => <NumberInput {...props} max={100} min={1} />}
              </Field>

              <Text marginLeft="m-size" type="caption">
                {t(getPlural('boxes', values.product_quantity))}
              </Text>
            </Flexbox>

            <Button
              disabled={!isValid || quantityCorrectInBasket}
              label={t(
                isInBasket
                  ? quantityCorrectInBasket
                    ? 'actions.inBasket'
                    : 'actions.updateInBasket'
                  : 'actions.addToBasket'
              )}
              marginTop="m-size"
              size="medium"
              type="submit"
              variant="primary"
            />
          </FormikForm>
        )
      }}
    </Formik>
  )
}

const getPlural = (key: string, count: number) => {
  if (count > 4) {
    return `${key}_multiple`
  } else if (count > 1) {
    return `${key}_plural`
  }

  return key
}

export default Form
