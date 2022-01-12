import { FieldWrapper, FormRow, ModalContent } from 'components'
import { Field, FieldProps } from 'formik'
import React from 'react'
import { FormValues } from './useForm'

const Form = () => (
  // const { t } = useTranslation('ADMIN_ORDERS')
  // const { t: commonT } = useTranslation('COMMON')

  // const { getInput } = useInput()

  <ModalContent>
    <FormRow>
      <FieldWrapper>
        <Field name="email" type="email">
          {(props: FieldProps<FormValues['email'], FormValues>) => (
            // <Input {...props} {...getInput('EMAIL')} />
            <p>{props.field.name}</p>
          )}
        </Field>
      </FieldWrapper>

      <FieldWrapper>
        <Field name="phone">
          {(props: FieldProps<FormValues['phone'], FormValues>) => (
            // <MobileInput fieldProps={props} {...getInput('PHONE')} />
            <p>{props.field.name}</p>
          )}
        </Field>
      </FieldWrapper>
    </FormRow>
  </ModalContent>
)

export default Form
