import { addEmail, addVoucher, triggerSendEmail } from 'api'
import { useFormSubmit, useIsDev, useSchema, useTranslation } from 'hooks'
import { User } from 'models'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { object } from 'yup'

const useForm = () => {
  const [view, setView] = useState<View>({ view: 'FORM' })
  const { getSchema } = useSchema()
  const commonT = useTranslation('COMMON').withBase('NEWSLETTER.ERROR.CODES')

  const initialValues = { email: '' }

  const schema = object({
    email: getSchema('EMAIL')
  })

  const useSubmit = () => {
    const isDev = useIsDev()

    const { mutateAsync: mutateTriggerSendEmail } =
      useMutation(triggerSendEmail)
    const { mutateAsync: mutateAddVoucher } = useMutation(addVoucher)
    const { mutateAsync: mutateAddEmail } = useMutation(addEmail, {
      onSuccess: async (response) => {
        const { id } = await mutateAddVoucher({
          discount: 10
        })

        if (!isDev) {
          mutateTriggerSendEmail({
            to: response.email,
            type: {
              key: 'NEWSLETTER_SIGNUP',
              content: {
                voucher_id: id
              }
            }
          })
        }

        setView({
          view: 'SUCCESS'
        })
      },
      onError: (error) => {
        let message = commonT('default')

        if (error instanceof Error) {
          switch (error.message) {
            case '23505':
              message = commonT('23505')
              break
          }
        }

        setView({
          view: 'ERROR',
          message
        })
      }
    })

    return useFormSubmit((values: FormValues) => mutateAddEmail(values), {
      hideErrorToastMessage: true
    })
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
  email: User['email']
}

type View =
  | { view: 'FORM' }
  | { view: 'SUCCESS' }
  | { message: string; view: 'ERROR' }

export default useForm
