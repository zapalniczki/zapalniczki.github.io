import { PaymentType } from 'braty-common'
import { Columns } from 'components'
import { Form as FormikForm, Formik } from 'formik'
import { useTranslation } from 'hooks'
import { CheckoutTotal } from 'organisms'
import React from 'react'
import { getLanguagePrice } from 'utils'
import Form from './Form'
import useForm from './useForm'

type Props = {
  paymentTypes: PaymentType[]
}

const FormWrapper = ({ paymentTypes }: Props) => {
  const { language } = useTranslation('CHECKOUT_PAYMENT')
  const { initialValues, onSubmit, schema } = useForm(paymentTypes)

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validateOnChange
      validationSchema={schema}
    >
      {({ values }) => {
        const paymentType = paymentTypes.find(
          (type) => type.id === values.payment_type
        )

        let price: number | undefined
        if (paymentType) {
          price = getLanguagePrice({
            language,
            price: paymentType
          })
        }

        return (
          <FormikForm>
            <Columns>
              <div>
                <Form paymentTypes={paymentTypes} />
              </div>

              <div>
                <CheckoutTotal customPayment={price} />
              </div>
            </Columns>
          </FormikForm>
        )
      }}
    </Formik>
  )
}

export default FormWrapper
