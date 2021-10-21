import { CheckboxField } from 'components'
import React from 'react'
import { Field, FieldProps } from 'formik'
import { useInput } from 'hooks'
import { displayMoney } from 'utils'
import { FormValues } from './useForm'
import { Row } from '../common'
import { DeliveryType } from 'models'

type Props = {
  deliveryTypes: DeliveryType[]
}

const Form = ({ deliveryTypes }: Props) => {
  const { getInput } = useInput()

  return (
    <Row flexDirection="column">
      {deliveryTypes
        .filter((type) => type.is_enabled)
        .map((type, index) => (
          <Field key={type.label} name="delivery_type">
            {(props: FieldProps<DeliveryType, FormValues>) => (
              <CheckboxField
                {...props}
                {...getInput('DELIVERY_TYPE', true)}
                id={type.id}
                isFirst={index === 0}
                subtitle={`${type.time}`}
                title={type.label}
                val={displayMoney(type.price)}
              />
            )}
          </Field>
        ))}
    </Row>
  )
}

export default Form
