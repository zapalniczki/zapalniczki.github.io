import { loaderContext } from 'providers'
import { useContext } from 'react'

const useFormSubmit = <T, TFormValues>(
  submit: (values: TFormValues) => Promise<T>
) => {
  const { hide, show } = useContext(loaderContext)

  return async (values: TFormValues) => {
    try {
      show()
      const response = await submit(values)

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
