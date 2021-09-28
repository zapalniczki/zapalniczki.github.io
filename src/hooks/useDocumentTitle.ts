import { useLayoutEffect } from 'react'
import { useTranslation } from 'hooks'

const useDocumentTitle = (title?: string) => {
  const { t } = useTranslation('COMMON')

  useLayoutEffect(() => {
    if (title) {
      document.title = title
    } else {
      document.title = t('common.companyName')
    }
  }, [title])
}

export default useDocumentTitle
