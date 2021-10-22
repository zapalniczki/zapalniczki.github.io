import { FieldWrapper, Button, Flexbox, Input } from 'components'
import { Field, FieldProps } from 'formik'
import React from 'react'
import { useInput, useTranslation } from 'hooks'
import { Phone } from 'types/index2'
import { FormValues } from './useForm'

const Form = () => {
  const { t: commonT } = useTranslation('COMMON')

  const { getInput } = useInput()

  return (
    <Flexbox alignItems="flex-end">
      <FieldWrapper>
        <Field name="phone">
          {(props: FieldProps<Phone, FormValues>) => (
            <Input {...props} {...getInput('PHONE_NOT_MOBILE')} />
          )}
        </Field>
      </FieldWrapper>

      <Button
        label={commonT('CALL_ME_BACK.FORM.FORM.SUBMIT.label')}
        marginLeft="m-size"
        size="small"
        type="submit"
      />
    </Flexbox>
  )
}

export default Form
