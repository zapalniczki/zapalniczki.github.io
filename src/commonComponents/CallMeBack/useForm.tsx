import { useAddCallback } from 'api'
import { useSchema } from 'hooks'
import { loaderContext } from 'providers'
import { useContext, useState } from 'react'

import { object } from 'yup'

const useForm = () => {
  const [view, setView] = useState<View>({ view: 'FORM' })

  const { getSchema } = useSchema()
  const { hide, show } = useContext(loaderContext)

  const initialValues = { phone: '' }

  const schema = object({
    phone: getSchema('PHONE')
  })

  const { mutateAsync: mutateAddNumber } = useAddCallback()

  const onSubmit = async (values: FormValues) => {
    try {
      show()

      await mutateAddNumber({
        phone: values.phone
      })

      setView({
        view: 'SUCCESS'
      })
    } catch (_e: unknown) {
      setView({
        view: 'ERROR'
      })
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
  phone: string
}

type View = { view: 'FORM' } | { view: 'SUCCESS' } | { view: 'ERROR' }

export default useForm
