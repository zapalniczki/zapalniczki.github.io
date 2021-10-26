import React from 'react'
import { Field, FieldProps } from 'formik'
import { useInput } from 'hooks'
import { CheckboxField } from 'components'
import { FormValues } from './useForm'
import { Row } from '../common'
import { PaymentType } from 'models'
import Voucher from './Voucher'

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

      <Field component={Voucher} name="voucher_id" />
    </Row>
  )
}

export default Form
