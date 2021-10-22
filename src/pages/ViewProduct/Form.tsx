import React, { useContext } from 'react'
import { Formik, Form as FormikForm } from 'formik'
import { basketContext } from 'providers'
import useForm from './useForm'
import { GetProductResponse } from 'models'
import { useTranslation } from 'hooks'
import { Button } from 'components'

type Props = {
  product: GetProductResponse
}

const Form = ({ product }: Props) => {
  const { t } = useTranslation('VIEW_PRODUCT')
  const { getProductFromBasket } = useContext(basketContext)

  const { initialValues, submitForm } = useForm(product)
  const isInBasket = !!getProductFromBasket(product.id)

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validateOnChange
    >
      {() => (
        <FormikForm>
          <Button
            size="medium"
            type="submit"
            variant={isInBasket ? 'secondary' : 'primary'}
          >
            {isInBasket
              ? t('actions.removeFromBasket')
              : t('actions.addToBasket')}
          </Button>
        </FormikForm>
      )}
    </Formik>
  )
}

export default Form
