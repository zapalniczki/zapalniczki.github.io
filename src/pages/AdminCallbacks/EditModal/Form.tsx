import { ModalContent, Switch, Text } from 'components'
import { Field, FieldProps } from 'formik'
import { useTranslation } from 'hooks'
import React from 'react'
import { FormValues } from './useForm'

const Form = () => {
  const { t } = useTranslation('ADMIN_CALLBACKS')

  return (
    <>
      <ModalContent>
        <Field name="done">
          {(props: FieldProps<boolean, FormValues>) => {
            return (
              <>
                <Text marginBottom="s-size" type="body-2">
                  {t('EDIT_MODAL.FORM.DONE.label')}
                </Text>

                <Switch
                  checked={props.field.value}
                  onChange={() =>
                    props.form.setFieldValue('done', !props.field.value)
                  }
                />
              </>
            )
          }}
        </Field>
      </ModalContent>
    </>
  )
}

export default Form
