const useTest = () => {
  const testValue = window.localStorage.getItem('test')
  const isTest = testValue === 'true'

  return isTest
}

export default useTest
