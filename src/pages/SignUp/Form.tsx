import {
  Button,
  FieldWrapper,
  FormRow,
  Input,
  ValidatedInput
} from 'components'
import { Field, FieldProps, Form as FormikForm, useFormikContext } from 'formik'
import { useInput } from 'hooks'
import React from 'react'
import styled from 'styled-components'
import { FormValues } from './useForm'
import { getSpace } from 'styles'

const Form = () => {
  const { isValid } = useFormikContext<FormValues>()
  const { getInput } = useInput()

  return (
    <StyledFormikForm>
      <FormRow>
        <FieldWrapper>
          <Field name="email" type="email">
            {(fieldProps: FieldProps<FormValues['email'], FormValues>) => {
              const { label, ...inputProps } = getInput('EMAIL', true)

              return (
                <ValidatedInput label={label} name="email">
                  <Input
                    showLabelOrError={false}
                    {...fieldProps}
                    {...inputProps}
                  />
                </ValidatedInput>
              )
            }}
          </Field>
        </FieldWrapper>
      </FormRow>

      <FormRow>
        <FieldWrapper>
          <Field name="newPassword" type="password">
            {(
              fieldProps: FieldProps<FormValues['newPassword'], FormValues>
            ) => {
              const { label, ...inputProps } = getInput('NEW_PASSWORD', true)

              return (
                <ValidatedInput label={label} name="newPassword">
                  <Input
                    showLabelOrError={false}
                    {...fieldProps}
                    {...inputProps}
                  />
                </ValidatedInput>
              )
            }}
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
    </StyledFormikForm>
  )
}

const StyledFormikForm = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: ${getSpace('m-size')};
`

export default Form
