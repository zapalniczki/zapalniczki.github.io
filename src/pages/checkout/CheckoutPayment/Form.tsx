import React from 'react'
import { Field, FieldProps } from 'formik'
import { useTranslation } from 'hooks'
import { CheckboxField } from 'components'
import { FormValues } from './useForm'
import { Row } from '../common'
import { PaymentType } from 'models'

type Props = {
  paymentTypes: PaymentType[]
}

const Form = ({ paymentTypes }: Props) => {
  const { t } = useTranslation('CHECKOUT_PAYMENT')

  return (
    <Row flexDirection="column">
        {paymentTypes
          .filter((type) => type.is_enabled)
          .map((type, index) => (
            <Field key={type.label} name="paymentType">
              {(props: FieldProps<PaymentType, FormValues>) => (
                <CheckboxField
                  {...props}
                  fieldLabel={t('form.paymentType.label')}
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
