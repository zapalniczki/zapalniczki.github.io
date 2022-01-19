import React, { useContext } from 'react'
import { Field, FieldProps } from 'formik'
import { useInput, useTranslation } from 'hooks'
import { FormRow, CheckboxField } from 'components'
import { FormValues } from './useForm'
import { PaymentType } from 'braty-common'
import Voucher from './Voucher'
import { displayMoney, getLanguageLabel } from 'utils'
import { remoteConfigContext } from 'providers'

type Props = {
  paymentTypes: PaymentType[]
}

const Form = ({ paymentTypes }: Props) => {
  const { vouchers } = useContext(remoteConfigContext)
  const { currentLanguage } = useTranslation('COMMON')
  const { getInput } = useInput()

  return (
    <FormRow vertical>
      {paymentTypes
        .filter((type) => type.is_enabled)
        .map((type, index) => {
          const label = getLanguageLabel({
            language: currentLanguage,
            label: type
          })

          const description = getLanguageLabel({
            language: currentLanguage,
            label: type,
            description: true
          })

          return (
            <Field key={label} name="payment_type">
              {(props: FieldProps<PaymentType, FormValues>) => (
                <CheckboxField
                  {...props}
                  {...getInput('PAYMENT_TYPE', true)}
                  id={type.id}
                  isFirst={!index}
                  subtitle={description}
                  title={label}
                  val={displayMoney(type.price)}
                />
              )}
            </Field>
          )
        })}

      {vouchers && <Field component={Voucher} name="voucher_id" />}
    </FormRow>
  )
}

export default Form
