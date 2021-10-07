import { FieldWrapper, Button, Flexbox, Input } from 'components'
import { Field, FieldProps } from 'formik'
import React from 'react'
import { useTranslation } from 'hooks'
import { Email } from 'types'

const Form = () => {
  const { t: commonT } = useTranslation('COMMON')

  return (
    <Flexbox alignItems="flex-end">
      <FieldWrapper>
        <Field name="email">
          {(props: FieldProps<Email>) => (
            <Input
              {...props}
              placeholder={commonT('NEWSLETTER.FORM.FORM.EMAIL.placeholder')}
            />
          )}
        </Field>
      </FieldWrapper>

      <Button marginLeft="m-size" size="small" type="submit">
        {commonT('NEWSLETTER.FORM.FORM.SUBMIT.label')}
      </Button>
    </Flexbox>
  )
}

export default Form
