import { FieldWrapper, Button, Input } from 'components'
import { Field, FieldProps } from 'formik'

import React from 'react'
import { useTranslation } from 'hooks'
import { getRequiredOrNot } from 'utils'
import { ViewWrapper } from '.'
import { FormValues } from './useForm'

const Form = () => {
  const { t } = useTranslation('CONTACT')

  return (
    <ViewWrapper alignItems="flex-end">
      <FieldWrapper>
        <Field name="order_id">
          {(props: FieldProps<string, FormValues>) => (
            <Input
              {...props}
              label={getRequiredOrNot(
                t('items.CHECK_STATUS.form.order_id.label'),
                true
              )}
              maxLength={36}
              placeholder={t('items.CHECK_STATUS.form.order_id.placeholder')}
            />
          )}
        </Field>
      </FieldWrapper>

      <Button marginLeft="m-size" size="small" type="submit">
        {t('items.CHECK_STATUS.form.submit.label')}
      </Button>
    </ViewWrapper>
  )
}

export default Form