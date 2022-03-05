import { FieldWrapper, Button, Input } from 'components'
import { Flexbox } from '@zapalniczki/shared-components'
import { Field, FieldProps } from 'formik'
import React from 'react'
import { useInput, useTranslation } from 'hooks'
import { FormValues } from './useForm'

const Form = () => {
  const { t: commonT } = useTranslation('COMMON')

  const { getInput } = useInput()

  return (
    <Flexbox
      alignItems={['unset', 'flex-start', 'flex-start', 'flex-end']}
      flexDirection={['unset', 'column', 'column', 'row']}
    >
      <FieldWrapper>
        <Field name="phone">
          {(props: FieldProps<FormValues['phone'], FormValues>) => (
            <Input {...props} {...getInput('PHONE_NOT_MOBILE')} />
          )}
        </Field>
      </FieldWrapper>

      <Button
        label={commonT('CALL_ME_BACK.FORM.FORM.SUBMIT.label')}
        marginLeft={['unset', '0', '0', 'm-size']}
        marginTop={['unset', 'm-size', 'm-size', '0']}
        size="small"
        type="submit"
      />
    </Flexbox>
  )
}

export default Form
