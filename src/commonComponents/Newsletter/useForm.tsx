import { addEmail, addVoucher, triggerSendEmail } from 'api'
import { useFormSubmit, useDev, useFormSchema, useTranslation } from 'hooks'
import { User } from 'models'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { object } from 'yup'

const useForm = () => {
  const [view, setView] = useState<View>({ view: 'FORM' })
  const { getSchema } = useFormSchema()
  const commonT = useTranslation('COMMON').withBase('ERRORS')

  const initialValues = { email: '' }

  const validationSchema = object({
    email: getSchema('EMAIL')
  })

  const useSubmit = () => {
    const isDev = useDev()

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
        let message = 'default'

        if (error instanceof Error) {
          switch (error.message) {
            case '23505':
              message = error.message
              break
          }
        }

        setView({
          view: 'ERROR',
          message: commonT(message)
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
    validationSchema,
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
