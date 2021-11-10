import { FormRow, FieldWrapper, Input } from 'components'
import { Field, FieldProps } from 'formik'
import React from 'react'
import { useInput } from 'hooks'
import { FormValues } from './useForm'

const Form = () => {
  const { getInput } = useInput()

  return (
    <>
      <FormRow>
        <FieldWrapper>
          <Field name="street_address">
            {(props: FieldProps<FormValues['street_address'], FormValues>) => (
              <Input
                textarea
                {...props}
                {...getInput('STREET_ADDRESS', true)}
              />
            )}
          </Field>
        </FieldWrapper>
      </FormRow>

      <FormRow>
        <FieldWrapper>
          <Field name="post_code">
            {(props: FieldProps<FormValues['post_code'], FormValues>) => (
              <Input {...props} {...getInput('POST_CODE', true)} />
            )}
          </Field>
        </FieldWrapper>

        <FieldWrapper>
          <Field name="city">
            {(props: FieldProps<FormValues['city'], FormValues>) => (
              <Input {...props} {...getInput('CITY', true)} />
            )}
          </Field>
        </FieldWrapper>
      </FormRow>
    </>
  )
}

export default Form
