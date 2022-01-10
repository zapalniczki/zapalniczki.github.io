import { signInWithEmailAndPassword } from 'api'
import { useFormSchema, useFormSubmit, useTranslation } from 'hooks'
import { User } from 'braty-common'
import { useMutation } from 'react-query'
import { object } from 'yup'

export type FormValues = {
  email: User['email']
  password: string
}

const useForm = () => {
  const commonT = useTranslation('COMMON').withBase('ERRORS')
  const { getSchema } = useFormSchema()

  const useSubmit = () => {
    const { mutateAsync: mutateSignInWithEmailAndPassword } = useMutation(
      signInWithEmailAndPassword
    )

    return useFormSubmit(
      (values: FormValues) => mutateSignInWithEmailAndPassword(values),
      {
        hideErrorToastMessage: true,
        onError: (error, _values, form) => {
          let errorMessageKey = 'default'

          switch (error.message) {
            case 'Invalid login credentials':
              errorMessageKey = error.message
              break
          }

          form.setFieldError('email', commonT(errorMessageKey))
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
