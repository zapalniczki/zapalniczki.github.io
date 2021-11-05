import React, { createContext, ReactNode, useEffect, useState } from 'react'

type TogglesContext = {
  basketOpen: boolean
  closeBasket: () => void
  closeHamburger: () => void
  hamburgerOpen: boolean
  setBasketOpen: React.Dispatch<React.SetStateAction<boolean>>
  setHamburgerOpen: React.Dispatch<React.SetStateAction<boolean>>
  toggleHamburger: () => void
}

export const togglesContext = createContext<TogglesContext>({
  basketOpen: false,
  hamburgerOpen: false,
  setBasketOpen: () => undefined,
  setHamburgerOpen: () => undefined,
  closeBasket: () => undefined,
  closeHamburger: () => undefined,
  toggleHamburger: () => undefined
})

type Props = {
  children: ReactNode
}

const TogglesProvider = ({ children }: Props) => {
  const [basketOpen, setBasketOpen] = useState(false)
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const closeBasket = () => setBasketOpen(false)
  const closeHamburger = () => setHamburgerOpen(false)
  const toggleHamburger = () => setHamburgerOpen((prev) => !prev)

  useEffect(() => {
    if (basketOpen || hamburgerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [basketOpen, hamburgerOpen])

  return (
    <togglesContext.Provider
      value={{
        basketOpen,
        setBasketOpen,
        closeBasket,
        hamburgerOpen,
        setHamburgerOpen,
        closeHamburger,
        toggleHamburger
      }}
    >
      {children}
    </togglesContext.Provider>
  )
}

export default TogglesProvider
