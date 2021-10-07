import { useFormSubmit } from 'hooks'
import { useState } from 'react'
import { useMutation } from 'react-query'

import { object, string } from 'yup'

const useForm = (id: string, status: string) => {
  const [view, setView] = useState<View>({ view: 'FORM' })

  const initialValues = {
    id,
    status
  }

  const schema = object({
    id: string(),
    status: string()
  })

  const useSubmit = () => {
    // const { mutateAsync } = useMutation(updateNewsletterConsent, {
    //   onSuccess: () => {
    //     setView({
    //       view: 'SUCCESS'
    //     })
    //   }
    // })
    // return useFormSubmit((values: FormValues) => mutateAsync(values))
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
  status: string
}

type View = { view: 'FORM' } | { view: 'SUCCESS' } | { view: 'ERROR' }

export default useForm
