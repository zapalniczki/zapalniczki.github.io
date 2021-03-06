import { ResultIcon, Text } from 'components'
import React, { createContext, ReactNode, ReactText, useMemo } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Flexbox } from '@zapalniczki/shared-components'

type Props = {
  children: ReactNode
}

const ToastProvider = ({ children }: Props) => {
  const value = useMemo(
    () => ({
      addToast: (props: ToastProps) =>
        toast(<Toast {...props} />, {
          autoClose: 5000
        })
    }),
    []
  )

  return (
    <toastContext.Provider value={value}>
      {children}

      <ToastContainer
        autoClose={5000}
        closeOnClick
        draggable={false}
        hideProgressBar
        newestOnTop
        pauseOnHover
      />
    </toastContext.Provider>
  )
}

type ToastContext = {
  addToast: (props: ToastProps) => ReactText
}

export const toastContext = createContext<ToastContext>({
  addToast: () => ''
})

type ToastProps = {
  message: string
  variant?: 'SUCCESS' | 'ERROR'
}
const Toast = ({ message, variant }: ToastProps) => (
  <Flexbox alignItems="center">
    {variant && <ResultIcon size="2x" variant={variant} />}

    <Text marginLeft="m-size" type="subtitle-2">
      {message}
    </Text>
  </Flexbox>
)

export default ToastProvider
