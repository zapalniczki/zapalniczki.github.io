import {
  CountryInput,
  FieldWrapper,
  FormRow,
  Input,
  MobileInput,
  ValidatedInput
} from 'components'
import { Field, FieldProps } from 'formik'
import { useInput } from 'hooks'
import React from 'react'
import { FormValues } from './useForm'

type Props = {
  isCompany: boolean
}

const Form = ({ isCompany }: Props) => {
  const { getInput } = useInput()
  const name = isCompany ? 'COMPANY' : 'FULL_NAME'

  return (
    <>
      <FormRow>
        <FieldWrapper flexBasis="50%">
          <Field name="country" type="text">
            {(fieldProps: FieldProps<FormValues['country'], FormValues>) => {
              const { label, ...inputProps } = getInput('COUNTRY', true)

              return (
                <ValidatedInput label={label} name="country">
                  <CountryInput
                    onChange={(value) =>
                      fieldProps.form.setFieldValue('country', value?.value)
                    }
                    placeholder={inputProps.placeholder}
                    value={fieldProps.field.value}
                  />
                </ValidatedInput>
              )
            }}
          </Field>
        </FieldWrapper>
      </FormRow>

      <FormRow>
        <FieldWrapper>
          <Field name="full_name" type="text">
            {(fieldProps: FieldProps<FormValues['full_name'], FormValues>) => {
              const { label, ...inputProps } = getInput(name, true)

              return (
                <ValidatedInput label={label} name="full_name">
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

        {isCompany && (
          <FieldWrapper>
            <Field name="nip" type="text">
              {(fieldProps: FieldProps<string, FormValues>) => {
                const { label, ...inputProps } = getInput('NIP', true)

                return (
                  <ValidatedInput label={label} name="nip">
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
        )}
      </FormRow>

      <FormRow>
        <FieldWrapper>
          <Field name="street_address" type="text">
            {(
              fieldProps: FieldProps<FormValues['street_address'], FormValues>
            ) => {
              const { label, ...inputProps } = getInput('STREET_ADDRESS', true)

              return (
                <ValidatedInput label={label} name="street_address">
                  <Input
                    showLabelOrError={false}
                    textarea
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
          <Field name="post_code" type="text">
            {(fieldProps: FieldProps<FormValues['post_code'], FormValues>) => {
              const { label, ...inputProps } = getInput('POST_CODE', true)

              return (
                <ValidatedInput label={label} name="post_code">
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

        <FieldWrapper>
          <Field name="city" type="text">
            {(fieldProps: FieldProps<FormValues['city'], FormValues>) => {
              const { label, ...inputProps } = getInput('CITY', true)

              return (
                <ValidatedInput label={label} name="city">
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

        <FieldWrapper>
          <Field name="phone">
            {(fieldProps: FieldProps<FormValues['phone'], FormValues>) => (
              <MobileInput
                fieldProps={fieldProps}
                {...getInput('PHONE', true)}
              />
            )}
          </Field>
        </FieldWrapper>
      </FormRow>
    </>
  )
}

export default Form
