import { FieldWrapper, Button, Flexbox, Input } from 'components'
import { Field, FieldProps } from 'formik'
import React from 'react'
import { useTranslation } from 'hooks'
import { Phone } from 'types/index2'
import { FormValues } from './useForm'

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
