import {
  FieldWrapper,
  FormRow,
  Input,
  MobileInput,
  ModalContent
} from 'components'
import { Field, FieldProps } from 'formik'
import { useInput } from 'hooks'
import React from 'react'
import { FormValues } from './useForm'

const Form = () => {
  // const { t } = useTranslation('ADMIN_ORDERS')
  // const { t: commonT } = useTranslation('COMMON')

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
    </ModalContent>
  )
}

export default Form
