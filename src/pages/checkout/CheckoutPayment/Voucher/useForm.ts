import { Voucher } from 'models'
import { object } from 'yup'
import { useFormSubmit, useSchema } from 'hooks'
import { getVoucher } from 'api'
import { useMutation } from 'react-query'

const useForm = () => {
  const { getSchema } = useSchema()

  const onSubmit = useSubmit()

  const initialValues: FormValues = {
    voucher: ''
  }

  const schema = object({
    voucher: getSchema('VOUCHER')
  })

  return {
    initialValues,
    schema,
    onSubmit
  }
}

export type FormValues = {
  voucher: Voucher['id']
}

const useSubmit = () => {
  const { mutateAsync: mutateGetVoucher } = useMutation(getVoucher, {
    onSuccess: () => {
      console.log('hurra')
    }
  })

  return useFormSubmit((values: FormValues) =>
    mutateGetVoucher({ id: values.voucher })
  )
}

export default useForm
