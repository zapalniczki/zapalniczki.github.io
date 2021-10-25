import { FieldWrapper, Button, Flexbox, Input } from 'components'
import { Field, FieldProps } from 'formik'
import React from 'react'
import { useTranslation } from 'hooks'
import { FormValues } from './useForm'

const Form = () => {
  const { t: commonT } = useTranslation('COMMON')

  return (
    <Flexbox alignItems="flex-end">
      <FieldWrapper>
        <Field name="email">
          {(props: FieldProps<FormValues['email'], FormValues>) => (
            <Input
              {...props}
              placeholder={commonT('NEWSLETTER.FORM.FORM.EMAIL.placeholder')}
            />
          )}
        </Field>
      </FieldWrapper>

      <Button
        label={commonT('NEWSLETTER.FORM.FORM.SUBMIT.label')}
        marginLeft="m-size"
        size="small"
        type="submit"
      />
    </Flexbox>
  )
}

export default Form
