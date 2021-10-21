import React from 'react'
import { Field, FieldProps } from 'formik'
import { useInput } from 'hooks'
import { CheckboxField } from 'components'
import { FormValues } from './useForm'
import { Row } from '../common'
import { PaymentType } from 'models'

type Props = {
  paymentTypes: PaymentType[]
}

const Form = ({ paymentTypes }: Props) => {
  const { getInput } = useInput()

  return (
    <Row flexDirection="column">
      {paymentTypes
        .filter((type) => type.is_enabled)
        .map((type, index) => (
          <Field key={type.label} name="payment_type">
            {(props: FieldProps<PaymentType, FormValues>) => (
              <CheckboxField
                {...props}
                {...getInput('PAYMENT_TYPE', true)}
                id={type.id}
                isFirst={index === 0}
                subtitle={type.time}
                title={type.label}
              />
            )}
          </Field>
        ))}
    </Row>
  )
}

export default Form
