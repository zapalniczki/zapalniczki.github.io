import { updatePaymentType } from 'api'
import { useState } from 'react'
import { useMutation } from 'react-query'

import { object, string, boolean } from 'yup'

const useForm = (id: string, is_enabled: boolean) => {
  const [view, setView] = useState<View>({ view: 'FORM' })

  const initialValues = {
    id,
    is_enabled
  }

  const schema = object({
    id: string(),
    is_enabled: boolean()
  })

  const useSubmit = () => {
    const { mutateAsync } = useMutation(updatePaymentType, {
      onSuccess: () => {
        setView({
          view: 'SUCCESS'
        })
      }
    })

    return (values: FormValues) => mutateAsync(values)
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