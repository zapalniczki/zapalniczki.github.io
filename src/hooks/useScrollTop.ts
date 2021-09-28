import { useEffect } from 'react'

const useScrollTop = (...trackedProps: any[]) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [...trackedProps])
}

export default useScrollTop
