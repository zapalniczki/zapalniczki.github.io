import { Input } from 'components'
import { Field, FieldProps } from 'formik'
import React from 'react'
import { useInput } from 'hooks'
import { FormValues } from './useForm'
import FieldWrapper from '../common/FieldWrapper'
import Row from '../common/Row'

const Form = () => {
  const { getInput } = useInput()

  return (
    <>
      <Row>
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
      </Row>

      <Row>
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
      </Row>
    </>
  )
}

export default Form
