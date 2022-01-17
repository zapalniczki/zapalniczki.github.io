import { Field, FieldProps } from 'formik'
import React from 'react'
import { FormRow, FieldWrapper, MobileInput, Input } from 'components'
import { useInput } from 'hooks'
import { FormValues } from './useForm'
// import CountryInput from 'components/CountryInput'

type Props = {
  isCompany: boolean
}

const Form = ({ isCompany }: Props) => {
  const { getInput } = useInput()
  const name = isCompany ? 'COMPANY' : 'FULL_NAME'

  return (
    <>
      <FormRow>
        <FieldWrapper>
          <Field name="full_name" type="text">
            {(props: FieldProps<FormValues['full_name'], FormValues>) => (
              <Input {...props} {...getInput(name, true)} />
            )}
          </Field>
        </FieldWrapper>

        {isCompany && (
          <FieldWrapper>
            <Field name="nip" type="text">
              {(props: FieldProps<string, FormValues>) => (
                <Input {...props} {...getInput('NIP', true)} />
              )}
            </Field>
          </FieldWrapper>
        )}
      </FormRow>

      <FormRow>
        <FieldWrapper>
          <Field name="street_address" type="text">
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

      {/* <FormRow>
        <FieldWrapper>
          <Field name="post_code" type="text">
            {(props: FieldProps<FormValues['post_code'], FormValues>) => (
              <>
                <Input {...props} {...getInput('POST_CODE', true)} />

                <CountryInput />
              </>
            )}
          </Field>
        </FieldWrapper>
      </FormRow> */}

      <FormRow>
        <FieldWrapper>
          <Field name="post_code" type="text">
            {(props: FieldProps<FormValues['post_code'], FormValues>) => (
              <Input {...props} {...getInput('POST_CODE', true)} />
            )}
          </Field>
        </FieldWrapper>

        <FieldWrapper>
          <Field name="city" type="text">
            {(props: FieldProps<FormValues['city'], FormValues>) => (
              <Input {...props} {...getInput('CITY', true)} />
            )}
          </Field>
        </FieldWrapper>
      </FormRow>

      <FormRow>
        <FieldWrapper>
          <Field name="email" type="email">
            {(props: FieldProps<FormValues['email'], FormValues>) => (
              <Input {...props} {...getInput('EMAIL', true)} />
            )}
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
