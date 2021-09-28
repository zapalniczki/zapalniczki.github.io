import { useTranslation } from 'hooks'
import useDocumentTitle from './useDocumentTitle'

const useTabTitle = (title: string) => {
  const { t: commonT } = useTranslation('COMMON')

  const tabTitle = title + ' | ' + commonT('companyName')

  useDocumentTitle(tabTitle)
}

export default useTabTitle
