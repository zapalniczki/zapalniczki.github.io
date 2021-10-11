import { ModalContent, Switch, Text } from 'components'
import { Field, FieldProps } from 'formik'
import { useTranslation } from 'hooks'
import React from 'react'
import { FormValues } from './useForm'

const Form = () => {
  const { t } = useTranslation('ADMIN_NEWSLETTER_USERS')

  return (
    <ModalContent>
        <Field name="consent">
          {(props: FieldProps<boolean, FormValues>) => (
            <>
              <Text marginBottom="s-size" type="body-2">
                {t('EDIT_MODAL.FORM.CONSENT.label')}
              </Text>

              <Switch
                checked={props.field.value}
                onChange={() =>
                  props.form.setFieldValue('consent', !props.field.value)
                }
              />
            </>
          )}
        </Field>
      </ModalContent>
  )
}

export default Form
