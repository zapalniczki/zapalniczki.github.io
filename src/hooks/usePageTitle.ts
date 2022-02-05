import { BRATY_NAME } from 'braty-common'
import { useLayoutEffect } from 'react'

const usePageTitle = (title?: string) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title + ' | ' + BRATY_NAME
    } else {
      document.title = BRATY_NAME
    }
  }, [title])
}

export default usePageTitle
