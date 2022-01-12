import { editMarketing } from 'api'
import { DB_TABLES, Marketing } from 'braty-common'
import { useFormSchema, useFormSubmit } from 'hooks'
import { queryClient } from 'index'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { object } from 'yup'

const useForm = (
  id: string,
  email: Marketing['email'],
  phone: Marketing['phone'],
  notes: Marketing['notes']
) => {
  const { getSchema } = useFormSchema()

  const [view, setView] = useState<View>({ view: 'FORM' })

  const initialValues: FormValues = {
    email: email ?? '',
    phone: phone ?? '',
    notes: notes ?? ''
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
          notes: values.notes
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

export type FormValues = Required<
  Omit<Marketing, 'created_at' | 'updated_at' | 'id' | 'is_test'>
>

type View = { view: 'FORM' } | { view: 'SUCCESS' } | { view: 'ERROR' }

export default useForm
