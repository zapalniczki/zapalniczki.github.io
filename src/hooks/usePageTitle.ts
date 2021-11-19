import { useTranslation } from 'hooks'
import { useLayoutEffect } from 'react'

const usePageTitle = (title?: string) => {
  const { t: commonT } = useTranslation('COMMON')

  useLayoutEffect(() => {
    if (title) {
      document.title = title + ' | ' + commonT('companyName')
    } else {
      document.title = commonT('companyName')
    }
  }, [title])
}

export default usePageTitle
