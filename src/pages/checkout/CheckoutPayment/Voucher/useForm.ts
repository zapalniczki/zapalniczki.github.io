import { Voucher } from 'models'
import { object } from 'yup'
import { useFormSubmit, useSchema, useTranslation } from 'hooks'
import { getVoucher } from 'api'
import { useMutation } from 'react-query'
import { FormikHelpers, useField, useFormikContext } from 'formik'

const useForm = () => {
  const { getSchema } = useSchema()

  const initialValues: FormValues = {
    voucher: ''
  }

  const schema = object({
    voucher: getSchema('VOUCHER')
  })

  const useSubmit = () => {
    const t = useTranslation('CHECKOUT_PAYMENT').withBase('voucher')
    const { mutateAsync: mutateGetVoucher } = useMutation(getVoucher, {
      onSuccess: (response) => {
        console.log('hurra', response.id)
      }
    })

    return useFormSubmit(
      (values: FormValues) => mutateGetVoucher({ id: values.voucher }),
      {
        onError: (values, form: FormikHelpers<FormValues>) => {
          form.setFieldError('voucher', t('error'))
        },
        successToastMessage: t('successToastMessage')
      }
    )
  }

  const onSubmit = useSubmit()

  return {
    initialValues,
    schema,
    onSubmit
  }
}

export type FormValues = {
  voucher: Voucher['id']
}

export default useForm
