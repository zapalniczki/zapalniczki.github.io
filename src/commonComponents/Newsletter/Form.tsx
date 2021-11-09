import { FieldWrapper, Button, Flexbox, Input } from 'components'
import { Field, FieldProps } from 'formik'
import React from 'react'
import { useTranslation } from 'hooks'
import { FormValues } from './useForm'

const Form = () => {
  const { t: commonT } = useTranslation('COMMON')

  return (
    <Flexbox
      alignItems={['unset', 'flex-start', 'flex-start', 'flex-end']}
      flexDirection={['unset', 'column', 'column', 'row']}
    >
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
        marginLeft={['unset', '0', '0', 'm-size']}
        marginTop={['unset', 'm-size', 'm-size', '0']}
        size="small"
        type="submit"
      />
    </Flexbox>
  )
}

export default Form
