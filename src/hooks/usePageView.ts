import ReactGA from 'react-ga'

const usePageView = () => {
  const triggerPageView = () => {
    const page = window.location.pathname + window.location.search
    ReactGA.pageview(page)
  }

  return triggerPageView
}

export default usePageView
