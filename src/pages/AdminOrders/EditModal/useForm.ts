import { updateOrderStatus } from 'api'
import { ORDER_TABLE } from 'constants/db_tables'
import { useFormSubmit } from 'hooks'
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
    const { mutateAsync } = useMutation(updateOrderStatus, {
      onSuccess: () => {
        setView({
          view: 'SUCCESS'
        })
      }
    })

    return useFormSubmit(
      (values: FormValues) =>
        mutateAsync({
          id: values.id,
          status: values.status as OrderStatus
        }),
      {
        showSuccessToastMessage: true,
        onSuccess: () => {
          queryClient.invalidateQueries([ORDER_TABLE])
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
