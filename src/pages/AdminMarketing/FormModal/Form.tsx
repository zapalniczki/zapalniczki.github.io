import {
  FieldWrapper,
  FormRow,
  Input,
  MobileInput,
  ModalContent,
  Select,
  Switch
} from 'components'
import { Field, FieldProps } from 'formik'
import { useInput } from 'hooks'
import React from 'react'
import { FormValues } from './useForm'

const Form = () => {
  const { getInput } = useInput()

  return (
    <ModalContent>
      <FormRow>
        <FieldWrapper>
          <Field name="name">
            {(props: FieldProps<FormValues['name'], FormValues>) => (
              <Input {...props} {...getInput('NAME')} />
            )}
          </Field>
        </FieldWrapper>

        <FieldWrapper>
          <Field name="plus_code">
            {(props: FieldProps<FormValues['plus_code'], FormValues>) => (
              <Input {...props} {...getInput('PLUS_CODE')} />
            )}
          </Field>
        </FieldWrapper>
      </FormRow>

      <FormRow>
        <FieldWrapper>
          <Field name="email" type="email">
            {(props: FieldProps<FormValues['email'], FormValues>) => (
              <Input {...props} {...getInput('EMAIL')} />
            )}
          </Field>
        </FieldWrapper>

        <FieldWrapper>
          <Field name="phone">
            {(props: FieldProps<FormValues['phone'], FormValues>) => (
              <MobileInput fieldProps={props} {...getInput('PHONE')} />
            )}
          </Field>
        </FieldWrapper>
      </FormRow>

      <FormRow>
        <FieldWrapper>
          <Field name="notes">
            {(props: FieldProps<FormValues['notes'], FormValues>) => (
              <Input {...props} {...getInput('NOTES')} />
            )}
          </Field>
        </FieldWrapper>
      </FormRow>

      <FormRow>
        <FieldWrapper>
          <Field name="status">
            {(props: FieldProps<FormValues['status'], FormValues>) => (
              <Select
                onChange={props.field.onChange}
                value={props.field.value}
              />
            )}
          </Field>
        </FieldWrapper>
      </FormRow>

      <FormRow>
        <FieldWrapper>
          <Field name="send_brochure_agreement">
            {(
              props: FieldProps<
                FormValues['send_brochure_agreement'],
                FormValues
              >
            ) => (
              <Switch
                checked={props.field.value}
                {...getInput('SEND_BROCHURE_AGREEMENT')}
                onChange={(value) =>
                  props.form.setFieldValue('send_brochure_agreement', value)
                }
              />
            )}
          </Field>
        </FieldWrapper>
      </FormRow>

      <FormRow>
        <FieldWrapper>
          <Field name="send_brochure_cyclic_agreement">
            {(
              props: FieldProps<
                FormValues['send_brochure_cyclic_agreement'],
                FormValues
              >
            ) => (
              <Switch
                checked={props.field.value}
                {...getInput('SEND_BROCHURE_CYCLIC_AGREEMENT')}
                onChange={(value) =>
                  props.form.setFieldValue(
                    'send_brochure_cyclic_agreement',
                    value
                  )
                }
              />
            )}
          </Field>
        </FieldWrapper>
      </FormRow>
    </ModalContent>
  )
}

export default Form
