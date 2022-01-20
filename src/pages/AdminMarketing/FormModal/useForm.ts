import { addMarketing, editMarketing, triggerSendEmail } from 'api'
import { DB_TABLES, Marketing } from 'braty-common'
import { useFormSchema, useFormSubmit, useTest, useTranslation } from 'hooks'
import { queryClient } from 'index'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { object } from 'yup'

const useForm = (
  id?: Marketing['id'],
  email?: Marketing['email'],
  phone?: Marketing['phone'],
  notes?: Marketing['notes'],
  name?: Marketing['name'],
  plus_code?: Marketing['plus_code'],
  send_brochure_agreement?: Marketing['send_brochure_agreement'],
  send_brochure_cyclic_agreement?: Marketing['send_brochure_cyclic_agreement']
) => {
  const { getSchema } = useFormSchema()
  const [view, setView] = useState<View>({ view: 'FORM' })

  const initialValues: FormValues = {
    email: email ?? '',
    phone: phone ?? '',
    notes: notes ?? '',
    name: name ?? '',
    plus_code: plus_code ?? '',
    send_brochure_agreement: send_brochure_agreement ?? false,
    send_brochure_cyclic_agreement: send_brochure_cyclic_agreement ?? false
  }

  const schema = object({
    email: getSchema('EMAIL', true),
    phone: getSchema('PHONE', true),
    notes: getSchema('NOTES'),
    name: getSchema('NAME'),
    plus_code: getSchema('PLUS_CODE')
  })

  const useSubmit = () => {
    const isTest = useTest()
    const { mutateAsync: mutateEditMarketing } = useMutation(editMarketing)
    const { mutateAsync: mutateAddMarketing } = useMutation(addMarketing)
    const { mutateAsync: mutateTriggerSendEmail } =
      useMutation(triggerSendEmail)
    const { currentLanguage } = useTranslation('COMMON')

    return useFormSubmit(
      async (values: FormValues) => {
        let marketingResponse

        if (id) {
          marketingResponse = await mutateEditMarketing({
            id,
            email: values.email,
            phone: values.phone,
            notes: values.notes,
            name: values.name,
            plus_code: values.plus_code,
            send_brochure_agreement: values.send_brochure_agreement,
            send_brochure_cyclic_agreement:
              values.send_brochure_cyclic_agreement,
            is_test: isTest
          })
        } else {
          marketingResponse = await mutateAddMarketing({
            email: values.email,
            phone: values.phone,
            notes: values.notes,
            name: values.name,
            plus_code: values.plus_code,
            send_brochure_agreement: values.send_brochure_agreement,
            send_brochure_cyclic_agreement:
              values.send_brochure_cyclic_agreement,
            is_test: isTest
          })
        }

        let allowByOldEmail = true
        if (id) {
          if (send_brochure_agreement) {
            allowByOldEmail = false
          } else {
            allowByOldEmail = true
          }
        }

        const shouldSendEmail =
          values.email.length &&
          values.send_brochure_agreement &&
          allowByOldEmail

        if (shouldSendEmail) {
          mutateTriggerSendEmail({
            to: values.email,
            type: {
              key: 'MARKETING_OFFER',
              content: {
                name: values.name ?? undefined,
                language: currentLanguage
              }
            }
          })
        }

        return marketingResponse
      },
      {
        showSuccessToastMessage: true,
        onSuccess: () => {
          queryClient.invalidateQueries([DB_TABLES.MARKETING])

          setView({
            view: 'SUCCESS'
          })
        }
      }
    )
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
  email: NonNullable<Marketing['email']>
  name: NonNullable<Marketing['name']>
  notes: NonNullable<Marketing['notes']>
  phone: NonNullable<Marketing['phone']>
  plus_code: NonNullable<Marketing['plus_code']>
  send_brochure_agreement: Marketing['send_brochure_agreement']
  send_brochure_cyclic_agreement: Marketing['send_brochure_cyclic_agreement']
}

type View = { view: 'FORM' } | { view: 'SUCCESS' } | { view: 'ERROR' }

export default useForm
