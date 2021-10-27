import { useMemo } from 'react'

type Props = { key: string }

const useLocalStorage = (props: Props) => {
  const result = useMemo(() => {
    const value = window.localStorage.getItem(props.key)

    if (value) {
      return JSON.parse(value)
    }

    return null
  }, [])

  return result
}

export default useLocalStorage
