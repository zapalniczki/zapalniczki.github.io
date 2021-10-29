import { updateNewsletterConsent } from 'api'
import { NEWSLETTER_TABLE } from 'constants/db_tables'
import { useFormSubmit } from 'hooks'
import { queryClient } from 'index'
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

        queryClient.invalidateQueries([NEWSLETTER_TABLE])
      }
    })

    return useFormSubmit(
      (values: FormValues) =>
        mutateAsync({
          id: values.id,
          consent: values.consent
        }),
      {
        showSuccessToastMessage: true
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
  consent: boolean
  id: string
}

type View = { view: 'FORM' } | { view: 'SUCCESS' } | { view: 'ERROR' }

export default useForm
