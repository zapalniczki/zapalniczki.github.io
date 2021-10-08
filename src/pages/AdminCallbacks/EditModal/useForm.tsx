import { updateCallback } from 'api'
import { queryClient } from 'index'
import {} from 'providers'
import { useState } from 'react'
import { useMutation } from 'react-query'

import { object, string, boolean } from 'yup'

const useForm = (id: string, done: boolean) => {
  const [view, setView] = useState<View>({ view: 'FORM' })

  const initialValues: FormValues = {
    id,
    done
  }

  const schema = object({
    id: string(),
    done: boolean()
  })

  const useSubmit = () => {
    const { mutateAsync } = useMutation(updateCallback, {
      onSuccess: () => queryClient.invalidateQueries(['callbacks'])
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
  done: boolean
  id: string
}

type View = { view: 'FORM' } | { view: 'SUCCESS' } | { view: 'ERROR' }

export default useForm
