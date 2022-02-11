import { FormRow, CheckboxField, ValidatedInput } from 'components'
import React from 'react'
import { Field, FieldProps } from 'formik'
import { useInput, useTranslation } from 'hooks'
import { displayMoney, getLanguageLabel, getLanguagePrice } from 'utils'
import { FormValues } from './useForm'
import { DeliveryType } from 'braty-common'

type Props = {
  deliveryTypes: DeliveryType[]
}

const Form = ({ deliveryTypes }: Props) => {
  const { getInput } = useInput()
  const { currentLanguage } = useTranslation('COMMON')

  return (
    <FormRow vertical>
      {deliveryTypes.map((type, index) => {
        const optionLabel = getLanguageLabel({
          language: currentLanguage,
          label: type
        })

        const description = getLanguageLabel({
          language: currentLanguage,
          label: type,
          description: true
        })

        const price = getLanguagePrice({
          language: currentLanguage,
          price: type
        })

        return (
          <Field key={optionLabel} name="delivery_type">
            {(fieldProps: FieldProps<DeliveryType, FormValues>) => {
              const { label } = getInput('DELIVERY_TYPE', true)
              const isFirst = !index

              return (
                <>
                  {isFirst && (
                    <ValidatedInput label={label} name="delivery_type" />
                  )}

                  <CheckboxField
                    {...fieldProps.field}
                    caption={displayMoney(price)}
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
    </FormRow>
  )
}

export default Form
