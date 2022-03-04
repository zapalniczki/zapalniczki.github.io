import { signInWithEmailAndPassword } from 'api'
import { Customer } from 'braty-common'
import {
  useErrorMessage,
  useFormSchema,
  useFormSubmit
} from 'hooks'
import { useMutation } from 'react-query'
import { object } from 'yup'

export type FormValues = {
  email: Customer['email']
  password: string
}

const useForm = () => {
  const { getSchema } = useFormSchema()

  const useSubmit = () => {
    const getError = useErrorMessage()

    const { mutateAsync: mutateSignInWithEmailAndPassword } = useMutation(
      signInWithEmailAndPassword
    )

    return useFormSubmit(
      (values: FormValues) => mutateSignInWithEmailAndPassword(values),
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
    password: ''
  }

  const validationSchema = object().shape({
    email: getSchema('EMAIL'),
    password: getSchema('PASSWORD')
  })

  return {
    onSubmit,
    initialValues,
    validationSchema
  }
}

export default useForm
