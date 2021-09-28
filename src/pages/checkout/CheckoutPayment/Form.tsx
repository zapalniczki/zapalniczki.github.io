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
  const { t: commonT } = useTranslation('COMMON')
  const { t } = useTranslation('CHECKOUT_PAYMENT')

  return (
    <>
      <Row flexDirection="column">
        {paymentTypes.map((type, index) => (
          <Field key={type.label} name="paymentType">
            {(props: FieldProps<PaymentType, FormValues>) => (
              <CheckboxField
                {...props}
                fieldLabel={t('form.paymentType.label')}
                id={type.id}
                isFirst={index === 0}
                subtitle={commonT(`paymentTypes.${type.label}.subtitle`)}
                title={commonT(`paymentTypes.${type.label}.title`)}
              />
            )}
          </Field>
        ))}
      </Row>
    </>
  )
}

export default Form
