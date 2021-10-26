import { useMemo } from 'react'

type Props = { key: string } & (
  | {
      type: 'GET'
    }
  | {
      type: 'SET'
      value: any
    }
)

const useLocalStorage = (props: Props) => {
  const result = useMemo(() => {
    if (props.type === 'GET') {
      const value = window.localStorage.getItem(props.key)

      if (value) {
        return JSON.parse(value)
      }

      return null
    }

    window.localStorage.setItem(props.key, JSON.stringify(props.value))

    return undefined
  }, [])

  return result
}

export default useLocalStorage
