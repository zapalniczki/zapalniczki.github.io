import React from 'react'
import { Field, FieldProps, Form as FormikForm, useFormikContext } from 'formik'
import { FormRow, FieldWrapper, Input, Button } from 'components'
import { FormValues } from './useForm'
import { useInput } from 'hooks'

const Form = () => {
  const { isValid } = useFormikContext<FormValues>()
  const { getInput } = useInput()

  return (
    <FormikForm>
      <FormRow>
        <FieldWrapper>
          <Field name="email" type="email">
            {(props: FieldProps<FormValues['email'], FormValues>) => (
              <Input {...props} {...getInput('EMAIL', true)} />
            )}
          </Field>
        </FieldWrapper>
      </FormRow>

      <FormRow>
        <FieldWrapper>
          <Field name="newPassword" type="password">
            {(props: FieldProps<FormValues['newPassword'], FormValues>) => (
              <Input {...props} {...getInput('NEW_PASSWORD', true)} />
            )}
          </Field>
        </FieldWrapper>
      </FormRow>

      <FormRow>
        <FieldWrapper>
          <Field name="passwordConfirmation" type="password">
            {(
              props: FieldProps<FormValues['passwordConfirmation'], FormValues>
            ) => (
              <Input {...props} {...getInput('PASSWORD_CONFIRMATION', true)} />
            )}
          </Field>
        </FieldWrapper>
      </FormRow>

      <FormRow>
        <FieldWrapper>
          <Button
            disabled={!isValid}
            label={getInput('SUBMIT').label}
            marginTop="s-size"
            size="small"
            type="submit"
          />
        </FieldWrapper>
      </FormRow>
    </FormikForm>
  )
}

export default Form
