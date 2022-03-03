import { updateDeliveryType } from 'api'
import { DB_TABLES } from 'braty-common'
import { useFormSubmit } from 'hooks'
import { queryClient } from 'index'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { boolean, object, string } from 'yup'

const useForm = (id: string, is_enabled: boolean) => {
  const [view, setView] = useState<View>({ view: 'FORM' })

  const initialValues: FormValues = {
    id,
    is_enabled
  }

  const schema = object({
    id: string(),
    is_enabled: boolean()
  })

  const useSubmit = () => {
    const { mutateAsync } = useMutation(updateDeliveryType, {
      onSuccess: () => {
        setView({
          view: 'SUCCESS'
        })

        queryClient.invalidateQueries([DB_TABLES.DELIVERY_TYPES])
      }
    })

    return useFormSubmit((values: FormValues) => mutateAsync(values), {
      showSuccessToastMessage: true
    })
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
  is_enabled: boolean
}

type View = { view: 'FORM' } | { view: 'SUCCESS' } | { view: 'ERROR' }

export default useForm
