import { FormRow, CheckboxField } from 'components'
import React from 'react'
import { Field, FieldProps } from 'formik'
import { useInput, useTranslation } from 'hooks'
import { displayMoney, getLanguageLabel } from 'utils'
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
      {deliveryTypes
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
            <Field key={label} name="delivery_type">
              {(props: FieldProps<DeliveryType, FormValues>) => (
                <CheckboxField
                  {...props}
                  {...getInput('DELIVERY_TYPE', true)}
                  id={type.id}
                  isFirst={index === 0}
                  subtitle={description}
                  title={label}
                  val={displayMoney(type.price)}
                />
              )}
            </Field>
          )
        })}
    </FormRow>
  )
}

export default Form
