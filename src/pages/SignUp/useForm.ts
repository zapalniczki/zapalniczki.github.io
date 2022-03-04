import { signUp } from 'api'
import { useErrorMessage, useFormSchema, useFormSubmit } from 'hooks'
import { Customer } from 'braty-common'
import { useMutation } from 'react-query'
import { object } from 'yup'
import { useState } from 'react'

export type FormValues = {
  email: Customer['email']
  newPassword: string
  passwordConfirmation: string
}

const useForm = () => {
  const { getSchema } = useFormSchema()
  const [view, setView] = useState<View>('FORM')

  const useSubmit = () => {
    const getError = useErrorMessage()
    const { mutateAsync: mutateSignUp } = useMutation(signUp, {
      onSuccess: () => setView('SUCCESS')
    })

    return useFormSubmit(
      async (values: FormValues) =>
        await mutateSignUp({
          email: values.email,
          password: values.newPassword
        }),
      {
        hideErrorToastMessage: true,
        onError: (error, _values, form) => {
          const errorMessage = getError(error.message)

          form.setFieldError('email', errorMessage)
        }
      }
    )
  }

  const onSubmit = useSubmit()

  const initialValues: FormValues = {
    email: '',
    newPassword: '',
    passwordConfirmation: ''
  }

  const validationSchema = object().shape({
    email: getSchema('EMAIL'),
    newPassword: getSchema('NEW_PASSWORD'),
    passwordConfirmation: getSchema('PASSWORD_CONFIRMATION')
  })

  return {
    view,
    onSubmit,
    initialValues,
    validationSchema
  }
}

type View = 'FORM' | 'SUCCESS' | 'ERROR'

export default useForm
