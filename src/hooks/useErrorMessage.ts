import { BRATY_EMAIL, BRATY_PHONE } from 'braty-common'
import useTranslation from './useTranslation'

const useErrorMessage = () => {
  const commonT = useTranslation('COMMON').withBase('ERRORS')

  const getError = (message: Error['message']) => {
    const defaultValue = commonT('default', {
      email: BRATY_EMAIL,
      phone: BRATY_PHONE
    })

    return commonT(message, { defaultValue })
  }

  return getError
}

export default useErrorMessage
