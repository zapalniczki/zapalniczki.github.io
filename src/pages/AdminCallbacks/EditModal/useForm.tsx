import { useUpdateCallback } from 'api'
import { loaderContext } from 'providers/LoaderProvider'
import { useContext, useState } from 'react'

import { object, string, boolean } from 'yup'

const useForm = (id: string, done: boolean) => {
  const [view, setView] = useState<View>({ view: 'FORM' })
  const { show, hide } = useContext(loaderContext)

  const initialValues = {
    id,
    done
  }

  const schema = object({
    id: string(),
    done: boolean()
  })

  const mutateUpdateCallback = useUpdateCallback()

  const onSubmit = async (values: FormValues) => {
    try {
      show()

      await mutateUpdateCallback({
        id: values.id,
        done: values.done
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
  done: boolean
  id: string
}

type View = { view: 'FORM' } | { view: 'SUCCESS' } | { view: 'ERROR' }

export default useForm
