import { Button, Flexbox, Input } from 'components'
import { Field, FieldProps } from 'formik'
import { FormValues } from 'pages/checkout/CheckoutDetails/useForm'
import { FieldWrapper } from 'pages/checkout/common'
import React from 'react'
import { useTranslation } from 'hooks'
import { Email } from 'Types'

const Form = () => {
  const { t: commonT } = useTranslation('COMMON')

  return (
    <Flexbox alignItems="flex-end">
      <FieldWrapper>
        <Field name="email">
          {(props: FieldProps<Email, FormValues>) => (
            <Input
              {...props}
              placeholder={commonT('NEWSLETTER.FORM.FORM.EMAIL.placeholder')}
            />
          )}
        </Field>
      </FieldWrapper>

      <Button size="small" marginLeft="m-size" type="submit">
        {commonT('NEWSLETTER.FORM.FORM.SUBMIT.label')}
      </Button>
    </Flexbox>
  )
}

export default Form
