import { addCallback } from 'api'
import { useFormSchema, useFormSubmit } from 'hooks'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { object } from 'yup'

const useForm = () => {
  const [view, setView] = useState<View>({ view: 'FORM' })

  const { getSchema } = useFormSchema()

  const initialValues: FormValues = {
    phone: ''
  }

  const schema = object({
    phone: getSchema('PHONE')
  })

  const useSubmit = () => {
    const { mutateAsync: mutateAddNumber } = useMutation(addCallback, {
      onSuccess: () => {
        setView({
          view: 'SUCCESS'
        })
      },
      onError: () => {
        setView({
          view: 'ERROR'
        })
      }
    })

    return useFormSubmit((values: FormValues) => mutateAddNumber(values))
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
  phone: string
}

type View =
  | {
      view: 'FORM'
    }
  | {
      view: 'SUCCESS'
    }
  | {
      view: 'ERROR'
    }

export default useForm
