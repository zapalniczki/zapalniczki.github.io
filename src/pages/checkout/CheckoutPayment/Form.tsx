import React from 'react'
import { Field, FieldProps } from 'formik'
import { useInput } from 'hooks'
import { FormRow, CheckboxField } from 'components'
import { FormValues } from './useForm'
import { PaymentType } from 'models'
import Voucher from './Voucher'
import { displayMoney } from 'utils'

type Props = {
  paymentTypes: PaymentType[]
}

const Form = ({ paymentTypes }: Props) => {
  const { getInput } = useInput()

  return (
    <FormRow vertical>
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
                val={displayMoney(type.price)}
              />
            )}
          </Field>
        ))}

      <Field component={Voucher} name="voucher_id" />
    </FormRow>
  )
}

export default Form
