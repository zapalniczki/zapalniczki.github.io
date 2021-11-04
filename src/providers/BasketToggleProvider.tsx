import React, { createContext, ReactNode, useEffect, useState } from 'react'

type BasketToggleContext = {
  closeBasket: () => void
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const basketToggleContext = createContext<BasketToggleContext>({
  isOpen: false,
  setIsOpen: () => undefined,
  closeBasket: () => undefined
})

type Props = {
  children: ReactNode
}

const BasketToggleProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const closeBasket = () => setIsOpen(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <basketToggleContext.Provider
      value={{
        isOpen,
        setIsOpen,
        closeBasket
      }}
    >
      {children}
    </basketToggleContext.Provider>
  )
}

export default BasketToggleProvider
