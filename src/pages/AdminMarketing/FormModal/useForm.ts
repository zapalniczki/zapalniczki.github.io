import { addMarketing, editMarketing } from 'api'
import { DB_TABLES, Marketing } from 'braty-common'
import { useDev, useFormSchema, useFormSubmit } from 'hooks'
import { queryClient } from 'index'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { object } from 'yup'

const useForm = (
  id?: Marketing['id'],
  email?: Marketing['email'],
  phone?: Marketing['phone'],
  notes?: Marketing['notes'],
  name?: Marketing['name'],
  plus_code?: Marketing['plus_code']
) => {
  const { getSchema } = useFormSchema()

  const [view, setView] = useState<View>({ view: 'FORM' })

  const initialValues: FormValues = {
    email: email ?? '',
    phone: phone ?? '',
    notes: notes ?? '',
    name: name ?? '',
    plus_code: plus_code ?? ''
  }

  const schema = object({
    email: getSchema('EMAIL', true),
    phone: getSchema('PHONE', true),
    notes: getSchema('NOTES'),
    name: getSchema('NAME'),
    plus_code: getSchema('PLUS_CODE')
  })

  const useSubmit = () => {
    const isDev = useDev()
    const { mutateAsync: mutateEditMarketing } = useMutation(editMarketing)
    const { mutateAsync: mutateAddMarketing } = useMutation(addMarketing)

    return useFormSubmit(
      async (values: FormValues) => {
        let marketingResponse

        if (id) {
          marketingResponse = await mutateEditMarketing({
            id,
            email: values.email,
            phone: values.phone,
            notes: values.notes,
            name: values.name,
            plus_code: values.plus_code
          })
        } else {
          marketingResponse = await mutateAddMarketing({
            email: values.email,
            phone: values.phone,
            notes: values.notes,
            name: values.name,
            plus_code: values.plus_code,
            is_test: isDev
          })
        }
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
  plus_code: NonNullable<Marketing['plus_code']>
}

type View = { view: 'FORM' } | { view: 'SUCCESS' } | { view: 'ERROR' }

export default useForm
