import { addParcel, getUser, triggerSendEmail, updateOrderStatus } from 'api'
import { ORDER_TABLE } from 'constants/db_tables'
import { useFormSubmit, useIsDev } from 'hooks'
import { queryClient } from 'index'
import { Order, OrderStatus, Parcel } from 'models'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { object, string } from 'yup'

const useForm = (id: string, status: Order['status']) => {
  const [view, setView] = useState<View>({ view: 'FORM' })

  const initialValues: FormValues = {
    id,
    status,
    parcel_link: '',
    parcel_ref: ''
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

    const { mutateAsync: mutateAddParcel } = useMutation(addParcel)

    return useFormSubmit(
      async (values: FormValues) => {
        let parcelId: Order['parcel_id'] = null
        if (values.parcel_link && values.parcel_ref) {
          const parcelResponse = await mutateAddParcel({
            ref: values.parcel_ref,
            link: values.parcel_link
          })

          parcelId = parcelResponse.id
        }

        const orderResponse = await mutateUpdateOrderStatus({
          id: values.id,
          status: values.status as OrderStatus,
          parcel_id: parcelId
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
  parcel_link: Parcel['link']
  parcel_ref: Parcel['ref']
  status: Order['status']
}

type View = { view: 'FORM' } | { view: 'SUCCESS' } | { view: 'ERROR' }

export default useForm
