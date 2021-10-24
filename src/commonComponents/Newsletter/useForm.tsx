import { addEmail, addVoucher, triggerSendEmail } from 'api'
import { useFormSubmit, useSchema, useTranslation } from 'hooks'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { object } from 'yup'

const useForm = () => {
  const [view, setView] = useState<View>({ view: 'FORM' })
  const { getSchema } = useSchema()
  const { t: commonT } = useTranslation('COMMON')

  const initialValues = { email: '' }

  const schema = object({
    email: getSchema('EMAIL')
  })

  const useSubmit = () => {
    const { mutateAsync: mutateTriggerSendEmail } =
      useMutation(triggerSendEmail)
    const { mutateAsync: mutateAddVoucher } = useMutation(addVoucher)
    const { mutateAsync: mutateAddEmail } = useMutation(addEmail, {
      onSuccess: async (response) => {
        const { id } = await mutateAddVoucher()

        mutateTriggerSendEmail({
          to: response.email,
          type: {
            key: 'NEWSLETTER_SIGNUP',
            content: {
              voucher_id: id
            }
          }
        })

        setView({
          view: 'SUCCESS'
        })
      },
      onError: (error) => {
        let message = commonT('NEWSLETTER.ERROR.codes.default')

        if (error instanceof Error) {
          switch (error.message) {
            case '23505':
              message = commonT('NEWSLETTER.ERROR.codes.23505')
              break
          }
        }

        setView({
          view: 'ERROR',
          message
        })
      }
    })

    return useFormSubmit((values: FormValues) => mutateAddEmail(values))
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
  email: string
}

type View =
  | { view: 'FORM' }
  | { view: 'SUCCESS' }
  | { message: string; view: 'ERROR' }

export default useForm
