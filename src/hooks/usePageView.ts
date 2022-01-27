import ReactGA from 'react-ga'
import { useLocation } from 'react-router-dom'

const usePageView = () => {
  const { pathname, search } = useLocation()

  const triggerPageView = () => {
    const page = pathname + search
    ReactGA.pageview(page)
  }

  return triggerPageView
}

export default usePageView
