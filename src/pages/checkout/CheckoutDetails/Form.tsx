import { Field, FieldProps } from 'formik'
import React from 'react'
import {
  FormRow,
  FieldWrapper,
  MobileInput,
  Input,
  ValidatedInput,
  CountryInput
} from 'components'
import { useDev, useInput } from 'hooks'
import { FormValues } from './useForm'

type Props = {
  isCompany: boolean
}

const Form = ({ isCompany }: Props) => {
  const { getInput } = useInput()
  const name = isCompany ? 'COMPANY' : 'FULL_NAME'
  const isDev = useDev()

  return (
    <>
      {isDev && (
        <FormRow>
          <FieldWrapper flexBasis="50%">
            <Field name="post_code" type="text">
              {(props: FieldProps<FormValues['post_code'], FormValues>) => {
                const inputProps = getInput('COUNTRY', true)

                return (
                  <ValidatedInput label={inputProps.label} name="country">
                    <CountryInput
                      onChange={() => undefined}
                      value={undefined}
                    />
                  </ValidatedInput>
                )
              }}
            </Field>
          </FieldWrapper>
        </FormRow>
      )}

      <FormRow>
        <FieldWrapper>
          <Field name="full_name" type="text">
            {(props: FieldProps<FormValues['full_name'], FormValues>) => {
              const inputProps = getInput(name, true)

              return (
                <ValidatedInput label={inputProps.label} name="full_name">
                  <Input showLabelOrError={false} {...props} {...inputProps} />
                </ValidatedInput>
              )
            }}
          </Field>
        </FieldWrapper>

        {isCompany && (
          <FieldWrapper>
            <Field name="nip" type="text">
              {(props: FieldProps<string, FormValues>) => {
                const inputProps = getInput('NIP', true)

                return (
                  <ValidatedInput label={inputProps.label} name="nip">
                    <Input
                      showLabelOrError={false}
                      {...props}
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
            {(props: FieldProps<FormValues['street_address'], FormValues>) => {
              const inputProps = getInput('STREET_ADDRESS', true)

              return (
                <ValidatedInput label={inputProps.label} name="street_address">
                  <Input
                    showLabelOrError={false}
                    textarea
                    {...props}
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
            {(props: FieldProps<FormValues['post_code'], FormValues>) => {
              const inputProps = getInput('POST_CODE', true)

              return (
                <ValidatedInput label={inputProps.label} name="post_code">
                  <Input showLabelOrError={false} {...props} {...inputProps} />
                </ValidatedInput>
              )
            }}
          </Field>
        </FieldWrapper>

        <FieldWrapper>
          <Field name="city" type="text">
            {(props: FieldProps<FormValues['city'], FormValues>) => {
              const inputProps = getInput('CITY', true)

              return (
                <ValidatedInput label={inputProps.label} name="city">
                  <Input showLabelOrError={false} {...props} {...inputProps} />
                </ValidatedInput>
              )
            }}
          </Field>
        </FieldWrapper>
      </FormRow>

      <FormRow>
        <FieldWrapper>
          <Field name="email" type="email">
            {(props: FieldProps<FormValues['email'], FormValues>) => {
              const inputProps = getInput('EMAIL', true)

              return (
                <ValidatedInput label={inputProps.label} name="email">
                  <Input showLabelOrError={false} {...props} {...inputProps} />
                </ValidatedInput>
              )
            }}
          </Field>
        </FieldWrapper>

        <FieldWrapper>
          <Field name="phone">
            {(props: FieldProps<FormValues['phone'], FormValues>) => (
              <MobileInput fieldProps={props} {...getInput('PHONE', true)} />
            )}
          </Field>
        </FieldWrapper>
      </FormRow>
    </>
  )
}

export default Form
