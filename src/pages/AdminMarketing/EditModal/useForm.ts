import { editMarketing } from 'api'
import { DB_TABLES, Marketing } from 'braty-common'
import { useFormSchema, useFormSubmit } from 'hooks'
import { queryClient } from 'index'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { object } from 'yup'

const useForm = (
  id: Marketing['id'],
  email: Marketing['email'],
  phone: Marketing['phone'],
  notes: Marketing['notes'],
  name: Marketing['name']
) => {
  const { getSchema } = useFormSchema()

  const [view, setView] = useState<View>({ view: 'FORM' })

  const initialValues: FormValues = {
    email: email ?? '',
    phone: phone ?? '',
    notes: notes ?? '',
    name: name ?? ''
  }

  const schema = object({
    email: getSchema('EMAIL'),
    phone: getSchema('PHONE'),
    notes: getSchema('NOTES')
  })

  const useSubmit = () => {
    const { mutateAsync: mutateEditMarketing } = useMutation(editMarketing)

    return useFormSubmit(
      async (values: FormValues) => {
        const marketingResponse = await mutateEditMarketing({
          id,
          email: values.email,
          phone: values.phone,
          notes: values.notes,
          name: values.name
        })

        // if (!isDev) {
        //   mutateTriggerSendEmail({
        //     to: userResponse.email,
        //     type: {
        //       key: 'ORDER_STATUS_CHANGE',
        //       content: {
        //         order_id: orderResponse.id,
        //         order_status: orderResponse.status,
        //         name: userResponse.full_name
        //       }
        //     }
        //   })
        // }

        return marketingResponse
      },
      {
        showSuccessToastMessage: true,
        onSuccess: () => {
          queryClient.invalidateQueries([DB_TABLES.MARKETING])

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
  email: NonNullable<Marketing['email']>
  name: NonNullable<Marketing['name']>
  notes: NonNullable<Marketing['notes']>
  phone: NonNullable<Marketing['phone']>
}

type View = { view: 'FORM' } | { view: 'SUCCESS' } | { view: 'ERROR' }

export default useForm
