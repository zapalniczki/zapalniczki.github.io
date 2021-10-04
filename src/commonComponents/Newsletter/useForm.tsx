import { useAddEmail, useTriggerSendEmail } from 'api'
import { useSchema, useTranslation } from 'hooks'
import { loaderContext } from 'providers/LoaderProvider'
import { useContext, useState } from 'react'

import { object } from 'yup'

const useForm = () => {
  const [view, setView] = useState<View>({ view: 'FORM' })
  const { getSchema } = useSchema()
  const { show, hide } = useContext(loaderContext)
  const { t: commonT } = useTranslation('COMMON')

  const initialValues = { email: '' }

  const schema = object({
    email: getSchema('email')
  })

  const { mutateAsync: mutateAddEmail } = useAddEmail()
  const triggerSendEmail = useTriggerSendEmail()

  const onSubmit = async (values: FormValues) => {
    try {
      show()

      await mutateAddEmail({
        email: values.email
      })

      triggerSendEmail({
        to: values.email,
        type: {
          key: 'NEWSLETTER_SIGNUP'
        }
      })

      setView({
        view: 'SUCCESS'
      })
    } catch (_e: unknown) {
      if (_e instanceof Error) {
        let message: string
        switch (_e.message) {
          case '23505':
            message = commonT('NEWSLETTER.ERROR.codes.23505')
            break

          default:
            message = commonT('NEWSLETTER.ERROR.codes.default')
        }

        setView({
          view: 'ERROR',
          message
        })
      }
    }
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
  email: string
}

type View =
  | { view: 'FORM' }
  | { view: 'SUCCESS' }
  | { view: 'ERROR'; message: string }

export default useForm
