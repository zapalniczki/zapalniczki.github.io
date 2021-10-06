import { useEffect } from 'react'

const useScrollTop = (...trackedProps: string[]) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [...trackedProps])
}

export default useScrollTop
