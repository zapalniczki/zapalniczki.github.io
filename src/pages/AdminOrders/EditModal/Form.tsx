import { ModalContent, Select, Text } from 'components'
import { Field, FieldProps } from 'formik'
import { TranslateFunc, useTranslation } from 'hooks'
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

            return (
              <>
                <Text marginBottom="s-size" type="body-2">
                  {t('EDIT_MODAL.FORM.STATUS.label')}
                </Text>

                <Select
                  onChange={(option) => {
                    if (option) {
                      props.form.setFieldValue('status', option.value)
                    }
                  }}
                  options={getStatusesWithLabels(currentValue, commonT)}
                  value={{
                    value: currentValue,
                    label: commonT(`ORDER_STATUSES.${currentValue}`)
                  }}
                />
              </>
            )
          }}
        </Field>
      </ModalContent>
  )
}

const getStatusesWithLabels = (currentStatus: OrderStatus, t: TranslateFunc) =>
  ORDER_STATUSES.filter((status) => status !== currentStatus).map((status) => ({
    value: status,
    label: t(`ORDER_STATUSES.${status}`)
  }))

export default Form
