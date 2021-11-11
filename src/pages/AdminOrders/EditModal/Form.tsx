import { Button, Input, LabelledItem, ModalContent } from 'components'
import { Field, FieldProps } from 'formik'
import { useInput, useTranslation } from 'hooks'
import { OrderStatus, ORDER_STATUSES } from 'models'
import React from 'react'
import { FormValues } from './useForm'

const Form = () => {
  const { t } = useTranslation('ADMIN_ORDERS')
  const { t: commonT } = useTranslation('COMMON')

  const { getInput } = useInput()

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
                  marginY="m-size"
                  onClick={() => props.form.setFieldValue('status', newValue)}
                  size="small"
                />
              )}

              <Field name="parcel_link" type="text">
                {(props: FieldProps<FormValues['parcel_link'], FormValues>) => (
                  <Input {...props} {...getInput('PARCEL_LINK')} />
                )}
              </Field>

              <Field name="parcel_ref" type="text">
                {(props: FieldProps<FormValues['parcel_ref'], FormValues>) => (
                  <Input {...props} {...getInput('PARCEL_REF')} />
                )}
              </Field>
            </>
          )
        }}
      </Field>
    </ModalContent>
  )
}

export default Form
