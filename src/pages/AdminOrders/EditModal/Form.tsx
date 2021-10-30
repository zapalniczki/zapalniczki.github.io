import { Button, LabelledItem, ModalContent } from 'components'
import { Field, FieldProps } from 'formik'
import { useTranslation } from 'hooks'
import { OrderStatus, ORDER_STATUSES } from 'models'
import React from 'react'
import { FormValues } from './useForm'

const Form = () => {
  const { t } = useTranslation('ADMIN_ORDERS')
  const { t: commonT } = useTranslation('COMMON')

  return (
    <ModalContent>
      <Field name="status">
        {(props: FieldProps<FormValues['status'], FormValues>) => {
          const currentValue = props.field.value as OrderStatus
          const newValue =
            ORDER_STATUSES[ORDER_STATUSES.indexOf(currentValue) + 1]

          return (
            <>
              <LabelledItem
                item={commonT(`ORDER_STATUSES.${currentValue}`)}
                label={t('EDIT_MODAL.FORM.CURRENT_STATUS.label')}
              />

              {currentValue !== 'COMPLETED' && (
                <Button
                  label={t('EDIT_MODAL.FORM.CHANGE_STATUS.label', {
                    status: commonT(`ORDER_STATUSES.${newValue}`)
                  })}
                  marginTop="m-size"
                  onClick={() => props.form.setFieldValue('status', newValue)}
                  size="medium"
                />
              )}
            </>
          )
        }}
      </Field>
    </ModalContent>
  )
}

export default Form
