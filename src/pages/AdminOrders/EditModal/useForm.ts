import {
  addParcel,
  editParcel,
  getUser,
  triggerSendEmail,
  updateOrderStatus
} from 'api'
import { DB_TABLES, Order, OrderStatus, Parcel } from 'braty-common'
import { useFormSubmit, useNoEmail, useTranslation } from 'hooks'
import { queryClient } from 'index'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { object, string } from 'yup'

const useForm = (
  id: Order['id'],
  status: Order['status'],
  parcelLink?: Parcel['link'],
  parcelRef?: Parcel['ref'],
  parcelId?: Parcel['id']
) => {
  const [view, setView] = useState<View>({ view: 'FORM' })

  const initialValues: FormValues = {
    id,
    status,
    parcel_link: parcelLink ?? '',
    parcel_ref: parcelRef ?? ''
  }

  const schema = object({
    id: string(),
    status: string(),
    parcel_link: string(),
    parcel_ref: string().when('parcel_link', {
      is: (value: FormValues['parcel_link']) => !!value,
      then: string().required('Pole wymagne kiedy powyższe jest uzupełnione')
    })
  })

  const useSubmit = () => {
    const { language } = useTranslation('COMMON')
    const isNoEmail = useNoEmail()

    const { mutateAsync: mutateTriggerSendEmail } =
      useMutation(triggerSendEmail)
    const { mutateAsync: mutateGetUser } = useMutation(getUser)
    const { mutateAsync: mutateUpdateOrderStatus } =
      useMutation(updateOrderStatus)

    const { mutateAsync: mutateAddParcel } = useMutation(addParcel)
    const { mutateAsync: mutateEditParcel } = useMutation(editParcel)

    return useFormSubmit(
      async (values: FormValues) => {
        let parcel_id: Order['parcel_id'] = parcelId ?? null
        const payload = {
          ref: values.parcel_ref,
          link: values.parcel_link
        }

        if (!parcel_id) {
          const parcelResponse = await mutateAddParcel(payload)
          parcel_id = parcelResponse.id
        } else {
          await mutateEditParcel({
            ...payload,
            id: parcel_id
          })
        }

        const orderResponse = await mutateUpdateOrderStatus({
          id: values.id,
          status: values.status as OrderStatus,
          parcel_id: parcel_id
        })

        const userResponse = await mutateGetUser({
          id: orderResponse.user_id
        })

        if (!isNoEmail) {
          mutateTriggerSendEmail({
            language,
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
          queryClient.invalidateQueries([DB_TABLES.ORDER])

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
