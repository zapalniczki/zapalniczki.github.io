import { FormikHelpers } from 'formik'
import { useTranslation } from 'hooks'
import { loaderContext, toastContext } from 'providers'
import { useContext } from 'react'

const useFormSubmit = <T, TFormValues>(
  submit: (values: TFormValues) => Promise<T>,
  options?: {
    errorToastMessage?: string
    hideErrorToastMessage?: boolean
    onError?: (values: TFormValues, form: FormikHelpers<TFormValues>) => void
    onSuccess?: (values: TFormValues, form: FormikHelpers<TFormValues>) => void
    showSuccessToastMessage?: boolean
    successToastMessage?: string
  }
) => {
  const { hide, show } = useContext(loaderContext)
  const { addToast } = useContext(toastContext)

  const commonT = useTranslation('COMMON').withBase('TOAST')

  return async (values: TFormValues, form: FormikHelpers<TFormValues>) => {
    try {
      show()

      const response = await submit(values)

      if (options) {
        if (options.successToastMessage || options.showSuccessToastMessage) {
          addToast({
            message: options.successToastMessage || commonT('success'),
            variant: 'SUCCESS'
          })
        }

        if (options.onSuccess) {
          options.onSuccess(values, form)
        }
      }

      hide()

      return response
    } catch (e) {
      hide()

      if (!options?.hideErrorToastMessage) {
        addToast({
          message: (options && options.errorToastMessage) ?? commonT('error'),
          variant: 'ERROR'
        })
      }

      if (options) {
        if (options.onError) {
          options.onError(values, form)
        }
      }

      if (e) {
        throw new Error('error')
      }

      return undefined
    }
  }
}

export default useFormSubmit
