import { signInWithEmailAndPassword } from 'api'
import { useFormSchema, useFormSubmit } from 'hooks'
import { User } from 'models'
import { useMutation } from 'react-query'
import { object } from 'yup'

export type FormValues = {
  email: User['email']
  password: string
}

const useForm = () => {
  const { getSchema } = useFormSchema()

  const useSubmit = () => {
    const { mutateAsync: mutateSignInWithEmailAndPassword } = useMutation(
      signInWithEmailAndPassword
    )

    return useFormSubmit((values: FormValues) =>
      mutateSignInWithEmailAndPassword(values)
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
