import { useUpdateDeliveryType } from 'api'
import { loaderContext } from 'providers/LoaderProvider'
import { useContext, useState } from 'react'

import { object, string, boolean } from 'yup'

const useForm = (id: string, is_enabled: boolean) => {
  const [view, setView] = useState<View>({ view: 'FORM' })
  const { show, hide } = useContext(loaderContext)

  const initialValues = {
    id,
    is_enabled
  }

  console.log(initialValues)

  const schema = object({
    id: string(),
    is_enabled: boolean()
  })

  const mutateUpdateDeliveryType = useUpdateDeliveryType()

  const onSubmit = async (values: FormValues) => {
    try {
      show()

      await mutateUpdateDeliveryType({
        id: values.id,
        isEnabled: values.is_enabled
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
  is_enabled: boolean
  id: string
}

type View = { view: 'FORM' } | { view: 'SUCCESS' } | { view: 'ERROR' }

export default useForm
