import { FormRow, FieldWrapper, Input } from 'components'
import { Field, FieldProps } from 'formik'
import React from 'react'
import { useInput } from 'hooks'
import { FormValues } from './useForm'

const ShippingForm = () => {
  const { getInput } = useInput()

  return (
    <>
      <FormRow marginTop="m-size">
        <FieldWrapper>
          <Field name="shipping.street_address">
            {(
              props: FieldProps<
                FormValues['shipping']['street_address'],
                FormValues
              >
            ) => (
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
          <Field name="shipping.post_code">
            {(
              props: FieldProps<FormValues['shipping']['post_code'], FormValues>
            ) => <Input {...props} {...getInput('POST_CODE', true)} />}
          </Field>
        </FieldWrapper>

        <FieldWrapper>
          <Field name="shipping.city">
            {(
              props: FieldProps<FormValues['shipping']['city'], FormValues>
            ) => <Input {...props} {...getInput('CITY', true)} />}
          </Field>
        </FieldWrapper>
      </FormRow>
    </>
  )
}

export default ShippingForm
