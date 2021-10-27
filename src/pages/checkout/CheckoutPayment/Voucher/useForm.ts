import { getVoucher } from 'api'
import { FormikHelpers } from 'formik'
import { useFormSubmit, useSchema, useTranslation } from 'hooks'
import { Voucher } from 'models'
import { checkoutContext } from 'providers'
import { useContext } from 'react'
import { useMutation } from 'react-query'
import { object } from 'yup'

const useForm = (
  setCodeApplied: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { getSchema } = useSchema()
  const { setCheckout } = useContext(checkoutContext)

  const schema = object({
    voucher_id: getSchema('VOUCHER_ID')
  })

  const useSubmit = () => {
    const t = useTranslation('CHECKOUT_PAYMENT').withBase('voucher')
    const { mutateAsync: mutateGetVoucher } = useMutation(getVoucher, {
      onSuccess: (response) => {
        setCodeApplied(true)

        setCheckout((prev) => ({
          ...prev,
          voucher_id: response.id,
          voucher: {
            is_fixed: response.is_fixed,
            discount: response.discount
          }
        }))
      }
    })

    return useFormSubmit(
      (values: FormValues) => mutateGetVoucher({ id: values.voucher_id }),
      {
        onError: (values, form: FormikHelpers<FormValues>) => {
          form.setFieldError('voucher_id', t('error'))
          setCodeApplied(false)
        },
        successToastMessage: t('successToastMessage')
      }
    )
  }

  const onSubmit = useSubmit()

  return {
    schema,
    onSubmit
  }
}

export type FormValues = {
  voucher_id: Voucher['id']
}

export default useForm