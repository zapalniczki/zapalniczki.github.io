import { useUpdateConsent } from 'api'
import { loaderContext } from 'providers'
import { useContext, useState } from 'react'

import { object, string, boolean } from 'yup'

const useForm = (id: string, consent: boolean) => {
  const [view, setView] = useState<View>({ view: 'FORM' })
  const { hide, show } = useContext(loaderContext)

  const initialValues = {
    id,
    consent
  }

  const schema = object({
    id: string(),
    consent: boolean()
  })

  const mutateUpdateConsent = useUpdateConsent()

  const onSubmit = async (values: FormValues) => {
    try {
      show()

      await mutateUpdateConsent({
        id: values.id,
        consent: values.consent
      })

      setView({
        view: 'SUCCESS'
      })
    } catch (_e: unknown) {
      console.log('error')
    } finally {
      hide()
    }
  }

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
