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
        <FieldWrapper width="75%">
          <Field name="street">
            {(props: FieldProps<FormValues['street'], FormValues>) => (
              <Input {...props} {...getInput('STREET', true)} />
            )}
          </Field>
        </FieldWrapper>
        <FieldWrapper width="25%">
          <Field name="street_nr" type="text">
            {(props: FieldProps<FormValues['street_nr'], FormValues>) => (
              <Input {...props} {...getInput('STREET_NR', true)} />
            )}
          </Field>
        </FieldWrapper>
      </Row>

      <Row>
        <FieldWrapper>
          <Field name="address_cdn" type="text">
            {(props: FieldProps<FormValues['address_cdn'], FormValues>) => (
              <Input {...props} {...getInput('ADDRESS_CDN')} />
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
