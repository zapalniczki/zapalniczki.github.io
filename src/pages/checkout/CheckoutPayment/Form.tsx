import { PaymentType } from 'braty-common'
import {
  CheckboxField,
  DisplayMoney,
  FormRow,
  ValidatedInput
} from 'components'
import { Field, FieldProps } from 'formik'
import { useInput, useTranslation } from 'hooks'
import { remoteConfigContext } from 'providers'
import React, { useContext } from 'react'
import { getLanguageLabel, getLanguagePrice } from 'utils'
import { FormValues } from './useForm'
import Voucher from './Voucher'

type Props = {
  paymentTypes: PaymentType[]
}

const Form = ({ paymentTypes }: Props) => {
  const { vouchers } = useContext(remoteConfigContext)
  const { language } = useTranslation('COMMON')
  const { getInput } = useInput()

  return (
    <FormRow vertical>
      {paymentTypes
        .filter((type) => type.is_enabled)
        .map((type, index) => {
          const optionLabel = getLanguageLabel({
            language: language,
            label: type
          })

          const description = getLanguageLabel({
            language: language,
            label: type,
            description: true
          })

          const price = getLanguagePrice({
            language: language,
            price: type
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
                      caption={<DisplayMoney>{price}</DisplayMoney>}
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
