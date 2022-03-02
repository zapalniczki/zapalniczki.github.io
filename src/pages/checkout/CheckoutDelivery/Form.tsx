import { DeliveryType } from 'braty-common'
import {
  CheckboxField,
  DisplayMoney,
  FormRow,
  ValidatedInput
} from 'components'
import { Field, FieldProps } from 'formik'
import { useInput, useTranslation } from 'hooks'
import React from 'react'
import { getLanguageLabel, getLanguagePrice } from 'utils'
import { FormValues } from './useForm'

type Props = {
  deliveryTypes: DeliveryType[]
}

const Form = ({ deliveryTypes }: Props) => {
  const { getInput } = useInput()
  const { language } = useTranslation('COMMON')

  return (
    <FormRow vertical>
      {deliveryTypes.map((type, index) => {
        const optionLabel = getLanguageLabel({
          language,
          label: type
        })

        const description = getLanguageLabel({
          language,
          label: type,
          description: true
        })

        const price = getLanguagePrice({
          language,
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
    </FormRow>
  )
}

export default Form
