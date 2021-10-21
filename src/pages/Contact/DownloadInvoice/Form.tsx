import { FieldWrapper, Button, Input } from 'components'
import { Field, FieldProps } from 'formik'

import React from 'react'
import { useInput } from 'hooks'
import { ViewWrapper } from '.'
import { FormValues } from './useForm'

const Form = () => {
  const { getInput } = useInput()

  return (
    <ViewWrapper alignItems="flex-end">
      <FieldWrapper>
        <Field name="order_id">
          {(props: FieldProps<string, FormValues>) => (
            <Input {...props} {...getInput('ORDER_ID', true)} />
          )}
        </Field>
      </FieldWrapper>

      <Button marginLeft="m-size" size="small" type="submit">
        {getInput('SUBMIT').label}
      </Button>
    </ViewWrapper>
  )
}

export default Form
