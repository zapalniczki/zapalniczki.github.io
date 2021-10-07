import { useUpdatePaymentType } from 'api'
import { loaderContext } from 'providers'
import { useContext, useState } from 'react'

import { object, string, boolean } from 'yup'

const useForm = (id: string, is_enabled: boolean) => {
  const [view, setView] = useState<View>({ view: 'FORM' })
  const { hide, show } = useContext(loaderContext)

  const initialValues = {
    id,
    is_enabled
  }

  console.log(is_enabled)

  const schema = object({
    id: string(),
    is_enabled: boolean()
  })

  const mutateUpdateConsent = useUpdatePaymentType()

  const onSubmit = async (values: FormValues) => {
    try {
      show()

      await mutateUpdateConsent(values)

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
  is_enabled: boolean
}

type View = { view: 'FORM' } | { view: 'SUCCESS' } | { view: 'ERROR' }

export default useForm
