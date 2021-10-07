import { useUpdateConsent } from 'api'
import { loaderContext } from 'providers'
import { useContext, useState } from 'react'

import { object, string } from 'yup'

const useForm = (id: string, status: string) => {
  const [view, setView] = useState<View>({ view: 'FORM' })
  const { hide, show } = useContext(loaderContext)

  const initialValues = {
    id,
    status
  }

  const schema = object({
    id: string(),
    status: string()
  })

  const mutateUpdateConsent = useUpdateConsent()

  const onSubmit = async (values: FormValues) => {
    try {
      show()

      await mutateUpdateConsent({
        id: values.id,
        consent: !!values.status
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
  id: string
  status: string
}

type View = { view: 'FORM' } | { view: 'SUCCESS' } | { view: 'ERROR' }

export default useForm
