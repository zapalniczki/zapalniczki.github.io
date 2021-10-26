import { Button, FieldWrapper, Flexbox, Input } from 'components'
import { Field, FieldProps, FormikContextType, useFormikContext } from 'formik'
import { useInput, useTranslation } from 'hooks'
import { Voucher } from 'models'
import React from 'react'
import { FormValues } from './useForm'
import { FormValues as UpperFormValues } from '../useForm'
type Props = {
  codeApplied: boolean
  upperForm: FormikContextType<UpperFormValues>
}

const Form = ({ codeApplied, upperForm }: Props) => {
  const { t } = useTranslation('CHECKOUT_PAYMENT')
  const { getInput } = useInput()
  const { isSubmitting, isValid, setFieldValue, submitForm, values } =
    useFormikContext<FormValues>()

  return (
    <Flexbox alignItems="flex-end" marginTop="m-size">
      <FieldWrapper width="30rem">
        <Field name="voucher_id">
          {(props: FieldProps<Voucher['id']>) => (
            <Input
              disabled={codeApplied}
              {...getInput('VOUCHER_ID')}
              {...{
                ...props,
                field: {
                  ...props.field,
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                    setFieldValue('voucher_id', e.target.value)
                    upperForm.setFieldValue('voucher_id', e.target.value)
                  }
                }
              }}
            />
          )}
        </Field>
      </FieldWrapper>

      {values.voucher_id && isValid && !codeApplied && (
        <Button
          disabled={isSubmitting}
          label={t('voucher.applyVoucher')}
          marginLeft="m-size"
          onClick={submitForm}
          size="small"
          variant="secondary"
        />
      )}
    </Flexbox>
  )
}

export default Form
