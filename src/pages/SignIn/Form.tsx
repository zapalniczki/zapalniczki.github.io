import React from 'react'
import styled from 'styled-components'
import { Field, FieldProps, Form as FormikForm, useFormikContext } from 'formik'
import {
  FormRow,
  FieldWrapper,
  Input,
  Button,
  ValidatedInput
} from 'components'
import { FormValues } from './useForm'
import { useInput } from 'hooks'
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
          <Field name="password" type="password">
            {(fieldProps: FieldProps<FormValues['password'], FormValues>) => {
              const { label, ...inputProps } = getInput('PASSWORD', true)

              return (
                <ValidatedInput label={label} name="password">
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
