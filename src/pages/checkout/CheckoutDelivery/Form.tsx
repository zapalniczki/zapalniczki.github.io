import { CheckboxField } from 'components'
import React from 'react'
import { Field, FieldProps } from 'formik'
import { useTranslation } from 'hooks'
import { displayMoney } from 'utils'
import { FormValues } from './useForm'
import { Row } from '../common'
import { DeliveryType } from 'models'

type Props = {
  deliveryTypes: DeliveryType[]
}

const Form = ({ deliveryTypes }: Props) => {
  const { t: commonT } = useTranslation('COMMON')
  const { t } = useTranslation('CHECKOUT_DELIVERY')

  return (
    <>
      <Row flexDirection="column">
        {deliveryTypes
          .filter((type) => type.isAvailable)
          .map((type, index) => (
            <Field key={type.label} name="deliveryType">
              {(props: FieldProps<DeliveryType, FormValues>) => (
                <CheckboxField
                  {...props}
                  fieldLabel={t('form.deliveryType.label')}
                  id={type.label}
                  isFirst={index === 0}
                  subtitle={`${type.time}`}
                  title={commonT(`deliveryTypes.${type.label}`)}
                  val={displayMoney(type.price)}
                />
              )}
            </Field>
          ))}
      </Row>
    </>
  )
}

export default Form
