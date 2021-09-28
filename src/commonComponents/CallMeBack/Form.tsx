import { Button, Flexbox, Input } from 'components'
import { Field, FieldProps } from 'formik'
import { FormValues } from 'pages/checkout/CheckoutDetails/useForm'
import { FieldWrapper } from 'pages/checkout/common'
import React from 'react'
import { useTranslation } from 'hooks'
import { Phone } from 'Types'

const Form = () => {
  const { t: commonT } = useTranslation('COMMON')

  return (
    <Flexbox alignItems="flex-end">
      <FieldWrapper>
        <Field name="phone">
          {(props: FieldProps<Phone, FormValues>) => (
            <Input
              {...props}
              placeholder={commonT('CALL_ME_BACK.FORM.FORM.PHONE.placeholder')}
            />
          )}
        </Field>
      </FieldWrapper>

      <Button marginLeft="m-size" size="small" type="submit">
        {commonT('CALL_ME_BACK.FORM.FORM.SUBMIT.label')}
      </Button>
    </Flexbox>
  )
}

export default Form
