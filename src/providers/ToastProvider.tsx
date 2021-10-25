import { createContext, ReactNode, ReactText, useMemo } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React from 'react'

type Props = {
  children: ReactNode
}

const ToastProvider = ({ children }: Props) => {
  const value = useMemo(
    () => ({
      alfa: 2,
      notify: () => toast('Wow so easy!')
    }),
    []
  )

  return (
    <toastContext.Provider value={value}>
      {children}

      <ToastContainer />
    </toastContext.Provider>
  )
}

type ToastContext = {
  alfa: number
  notify: () => ReactText
}

const toastContext = createContext<ToastContext>({
  alfa: 0,
  notify: () => ''
})

export default ToastProvider
