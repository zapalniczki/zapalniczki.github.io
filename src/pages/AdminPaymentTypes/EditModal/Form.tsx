import { ModalContent, Switch, Text } from 'components'
import { Field, FieldProps } from 'formik'
import { useTranslation } from 'hooks'
import React from 'react'
import { FormValues } from './useForm'

const Form = () => {
  const { t } = useTranslation('ADMIN_PAYMENT_TYPES')

  return (
    <>
      <ModalContent>
        <Field name="is_enabled">
          {(props: FieldProps<boolean, FormValues>) => (
            <>
              <Text marginBottom="s-size" type="body-2">
                {t('EDIT_MODAL.FORM.IS_ENABLED.label')}
              </Text>

              <Switch
                checked={props.field.value}
                onChange={() =>
                  props.form.setFieldValue('is_enabled', !props.field.value)
                }
              />
            </>
          )}
        </Field>
      </ModalContent>
    </>
  )
}

export default Form
