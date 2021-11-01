import { getUser, triggerSendEmail, updateOrderStatus } from 'api'
import { ORDER_TABLE } from 'constants/db_tables'
import { useFormSubmit, useIsDev } from 'hooks'
import { queryClient } from 'index'
import { Order, OrderStatus } from 'models'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { object, string } from 'yup'

const useForm = (id: string, status: Order['status']) => {
  const [view, setView] = useState<View>({ view: 'FORM' })

  const initialValues: FormValues = {
    id,
    status
  }

  const schema = object({
    id: string(),
    status: string()
  })

  const useSubmit = () => {
    const isDev = useIsDev()

    const { mutateAsync: mutateTriggerSendEmail } =
      useMutation(triggerSendEmail)
    const { mutateAsync: mutateGetUser } = useMutation(getUser)
    const { mutateAsync: mutateUpdateOrderStatus } =
      useMutation(updateOrderStatus)

    return useFormSubmit(
      async (values: FormValues) => {
        const orderResponse = await mutateUpdateOrderStatus({
          id: values.id,
          status: values.status as OrderStatus
        })

        const userResponse = await mutateGetUser({
          id: orderResponse.user_id
        })

        if (!isDev) {
          mutateTriggerSendEmail({
            to: userResponse.email,
            type: {
              key: 'ORDER_STATUS_CHANGE',
              content: {
                order_id: orderResponse.id,
                order_status: orderResponse.status,
                name: userResponse.full_name
              }
            }
          })
        }

        return userResponse
      },
      {
        showSuccessToastMessage: true,
        onSuccess: () => {
          queryClient.invalidateQueries([ORDER_TABLE])

          setView({
            view: 'SUCCESS'
          })
        }
      }
    )
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

export type FormValues = {
  id: string
  status: Order['status']
}

type View = { view: 'FORM' } | { view: 'SUCCESS' } | { view: 'ERROR' }

export default useForm
