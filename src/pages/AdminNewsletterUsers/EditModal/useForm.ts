import { updateNewsletterConsent } from 'api'
import { useFormSubmit } from 'hooks'
import { useState } from 'react'
import { useMutation } from 'react-query'

import { object, string, boolean } from 'yup'

const useForm = (id: string, consent: boolean) => {
  const [view, setView] = useState<View>({ view: 'FORM' })

  const initialValues = {
    id,
    consent
  }

  const schema = object({
    id: string(),
    consent: boolean()
  })

  const useSubmit = () => {
    const { mutateAsync } = useMutation(updateNewsletterConsent, {
      onSuccess: () => {
        setView({
          view: 'SUCCESS'
        })
      }
    })

    return useFormSubmit((values: FormValues) =>
      mutateAsync({
        id: values.id,
        consent: values.consent
      })
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
  consent: boolean
  id: string
}

type View = { view: 'FORM' } | { view: 'SUCCESS' } | { view: 'ERROR' }

export default useForm
