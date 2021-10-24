import { getOrderStatus } from 'api'
import { useFormSubmit, useSchema, useTranslation } from 'hooks'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { object } from 'yup'

export type FormValues = {
  order_id: string
}

const useForm = () => {
  const { t } = useTranslation('CONTACT')
  const [view, setView] = useState<View>({ view: 'FORM' })

  const { getSchema } = useSchema()

  const initialValues: FormValues = {
    order_id: ''
  }

  const schema = object({
    order_id: getSchema('ORDER_ID')
  })

  const useSubmit = () => {
    const { mutateAsync: mutateGetOrderStatus } = useMutation(getOrderStatus, {
      onSuccess: (order) => {
        setView({
          view: 'RESULT',
          status: order.status
        })
      },
      onError: () => {
        setView({
          view: 'ERROR',
          message: t('items.CHECK_STATUS.error.info')
        })
      }
    })

    return useFormSubmit((values: FormValues) => mutateGetOrderStatus(values))
  }

  const onSubmit = useSubmit()

  return {
    initialValues,
    schema,
    onSubmit,
    view,
    setView
  }
}

export type View =
  | { view: 'FORM' }
  | { status: string; view: 'RESULT' }
  | { message: string; view: 'ERROR' }

export default useForm
