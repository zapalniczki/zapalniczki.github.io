import { Button, FieldWrapper, Flexbox, Input } from 'components'
import { Field, FieldProps, useFormikContext } from 'formik'
import { useInput, useTranslation } from 'hooks'
import { Voucher } from 'models'
import React from 'react'
import { FormValues } from './useForm'

const Form = () => {
  const { t } = useTranslation('CHECKOUT_PAYMENT')
  const { getInput } = useInput()
  const { isValid, submitForm, values } = useFormikContext<FormValues>()

  return (
    <Flexbox alignItems="flex-end">
      <FieldWrapper width="30rem">
        <Field name="voucher">
          {(props: FieldProps<Voucher['id']>) => (
            <Input {...props} {...getInput('VOUCHER')} />
          )}
        </Field>
      </FieldWrapper>

      <Button
        disabled={!values.voucher || !isValid}
        label={t('voucher.applyVoucher')}
        marginLeft="m-size"
        onClick={submitForm}
        size="small"
        variant="secondary"
      />
    </Flexbox>
  )
}

export default Form
