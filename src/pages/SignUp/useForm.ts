import { signUp } from 'api'
import { useFormSchema, useFormSubmit } from 'hooks'
import { User } from 'braty-common'
import { useMutation } from 'react-query'
import { object } from 'yup'

export type FormValues = {
  email: User['email']
  newPassword: string
  passwordConfirmation: string
}

const useForm = () => {
  const { getSchema } = useFormSchema()

  const useSubmit = () => {
    const { mutateAsync: mutateSignUp } = useMutation(signUp)

    return useFormSubmit(
      (values: FormValues) =>
        mutateSignUp({
          email: values.email,
          password: values.newPassword
        }),
      {
        hideErrorToastMessage: true
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
    onSubmit,
    initialValues,
    validationSchema
  }
}

export default useForm
