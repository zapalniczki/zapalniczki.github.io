import React from 'react'
import { Field, FieldProps, Form as FormikForm } from 'formik'
import { FormRow, FieldWrapper, Input, Button } from 'components'
import { FormValues } from './useForm'
import { useInput } from 'hooks'

const Form = () => {
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
          <Field name="password" type="password">
            {(props: FieldProps<FormValues['password'], FormValues>) => (
              <Input {...props} {...getInput('PASSWORD', true)} />
            )}
          </Field>
        </FieldWrapper>
      </FormRow>

      <FormRow>
        <FieldWrapper>
          <Button
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
