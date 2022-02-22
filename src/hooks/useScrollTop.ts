import { useEffect } from 'react'

const useScrollTop = (...trackedProps: string[]) => {
  useEffect(() => {
    scrollToTop()
  }, [...trackedProps])
}

export const scrollToTop = () => window.scrollTo(0, 0)

export default useScrollTop
