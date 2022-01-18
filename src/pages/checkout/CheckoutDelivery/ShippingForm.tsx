import {
  FormRow,
  FieldWrapper,
  Input,
  ValidatedInput,
  CountryInput
} from 'components'
import { Field, FieldProps } from 'formik'
import React from 'react'
import { useInput } from 'hooks'
import { FormValues } from './useForm'

const ShippingForm = () => {
  const { getInput } = useInput()

  return (
    <>
      <FormRow>
        <FieldWrapper flexBasis="50%">
          <Field name="shipping.country" type="text">
            {(
              fieldProps: FieldProps<
                FormValues['shipping']['country'],
                FormValues
              >
            ) => {
              const { label, ...inputProps } = getInput('COUNTRY', true)

              return (
                <ValidatedInput label={label} name="shipping.country">
                  <CountryInput
                    onChange={(value) =>
                      fieldProps.form.setFieldValue(
                        'shipping.country',
                        value?.value
                      )
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

      <FormRow marginTop="m-size">
        <FieldWrapper>
          <Field name="shipping.street_address">
            {(
              fieldProps: FieldProps<
                FormValues['shipping']['street_address'],
                FormValues
              >
            ) => {
              const { label, ...inputProps } = getInput('STREET_ADDRESS', true)

              return (
                <ValidatedInput label={label} name="shipping.street_address">
                  <Input
                    showLabelOrError={false}
                    textarea
                    {...inputProps}
                    {...fieldProps}
                  />
                </ValidatedInput>
              )
            }}
          </Field>
        </FieldWrapper>
      </FormRow>

      <FormRow>
        <FieldWrapper>
          <Field name="shipping.post_code">
            {(
              fieldProps: FieldProps<
                FormValues['shipping']['post_code'],
                FormValues
              >
            ) => {
              const { label, ...inputProps } = getInput('POST_CODE', true)

              return (
                <ValidatedInput label={label} name="shipping.post_code">
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
          <Field name="shipping.city">
            {(
              fieldProps: FieldProps<FormValues['shipping']['city'], FormValues>
            ) => {
              const { label, ...inputProps } = getInput('CITY', true)

              return (
                <ValidatedInput label={label} name="shipping.city">
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
    </>
  )
}

export default ShippingForm
