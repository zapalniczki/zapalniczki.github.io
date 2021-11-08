import ReactGA from 'react-ga'

const useModalView = (name: string) => {
  const triggerModalView = () => {
    ReactGA.modalview(name)
  }

  return triggerModalView
}

export default useModalView
