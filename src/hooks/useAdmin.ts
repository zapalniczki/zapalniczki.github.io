const useAdmin = () => {
  const adminValue = window.localStorage.getItem('admin')
  const isAdmin = adminValue === 'true'

  return isAdmin
}

export default useAdmin
