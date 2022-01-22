const useNoEmail = () => {
  const emailValue = window.localStorage.getItem('noEmail')
  const isNoEmail = emailValue === 'true'

  return isNoEmail
}

export default useNoEmail
