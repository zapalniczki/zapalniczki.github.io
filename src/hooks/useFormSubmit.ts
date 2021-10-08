import { loaderContext } from 'providers'
import { useContext } from 'react'

const useFormSubmit = <T, TFormValues>(
  submit: (values: TFormValues) => Promise<T>,
  options?: {
    onSuccess?: (values: TFormValues) => void
  }
) => {
  const { hide, show } = useContext(loaderContext)

  return async (values: TFormValues) => {
    try {
      show()
      const response = await submit(values)

      if (options) {
        if (options.onSuccess) {
          options.onSuccess(values)
        }
      }

      hide()
      return response
    } catch (e) {
      if (e) {
        throw new Error('error')
      }

      hide()
      return
    }
  }
}

export default useFormSubmit
