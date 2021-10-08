import { updateMold } from 'api'
import { useFormSubmit } from 'hooks'
import { Mold } from 'models'
import { useState } from 'react'
import { useMutation } from 'react-query'

import { object, string } from 'yup'

const useForm = (id: string, status: Mold['status']) => {
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
    const { mutateAsync } = useMutation(updateMold, {
      onSuccess: () => {
        setView({
          view: 'SUCCESS'
        })
      }
    })
    return useFormSubmit((values: FormValues) => mutateAsync(values))
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
  status: Mold['status']
}

type View = { view: 'FORM' } | { view: 'SUCCESS' } | { view: 'ERROR' }

export default useForm
