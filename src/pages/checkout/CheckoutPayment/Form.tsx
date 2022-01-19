import React, { useContext } from 'react'
import { Field, FieldProps } from 'formik'
import { useInput, useTranslation } from 'hooks'
import { FormRow, CheckboxField, ValidatedInput } from 'components'
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
          const optionLabel = getLanguageLabel({
            language: currentLanguage,
            label: type
          })

          const description = getLanguageLabel({
            language: currentLanguage,
            label: type,
            description: true
          })

          return (
            <Field key={optionLabel} name="payment_type">
              {(fieldProps: FieldProps<PaymentType, FormValues>) => {
                const { label } = getInput('PAYMENT_TYPE', true)
                const isFirst = !index

                return (
                  <>
                    {isFirst && (
                      <ValidatedInput label={label} name="payment_type" />
                    )}

                    <CheckboxField
                      {...fieldProps.field}
                      caption={displayMoney(type.price)}
                      selectedValue={fieldProps.field.value}
                      subtitle={description}
                      title={optionLabel}
                      value={type.id}
                    />
                  </>
                )
              }}
            </Field>
          )
        })}

      {vouchers && <Field component={Voucher} name="voucher_id" />}
    </FormRow>
  )
}

export default Form
