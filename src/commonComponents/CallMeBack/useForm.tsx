import { useAddNumber } from 'api'
import { useSchema } from 'hooks'
import { loaderContext } from 'providers/LoaderProvider'
import { useContext, useState } from 'react'

import { object } from 'yup'

const useForm = () => {
  const [view, setView] = useState<View>({ view: 'FORM' })
  const { getSchema } = useSchema()
  const { show, hide } = useContext(loaderContext)

  const initialValues = { phone: '' }

  const schema = object({
    phone: getSchema('phone')
  })

  const { mutateAsync: mutateAddNumber } = useAddNumber()

  const onSubmit = async (values: FormValues) => {
    try {
      show()

      await mutateAddNumber({
        phone: values.phone
      })

      setView({
        view: 'SUCCESS'
      })

      // eslint-disable-next-line no-empty
    } catch (_e: unknown) {}
    hide()
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

type View = { view: 'FORM' } | { view: 'SUCCESS' }

export default useForm
