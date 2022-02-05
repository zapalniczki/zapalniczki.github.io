import { useState, createContext, ReactNode } from 'react'
import React from 'react'
import styled from 'styled-components'
import { changeColorAlpha } from 'utils'
import { Spinner } from 'components'
import getColor from 'styles/getColor'

type LoaderContext = {
  hide: () => void
  show: () => void
}

export const loaderContext = createContext<LoaderContext>({
  show: () => undefined,
  hide: () => undefined
})

type Props = {
  children: ReactNode
}

const LoaderProvider = ({ children }: Props) => {
  const [loaderVisible, setLoaderVisible] = useState(false)

  return (
    <loaderContext.Provider
      value={{
        show: () => setLoaderVisible(true),
        hide: () => setLoaderVisible(false)
      }}
    >
      {loaderVisible && (
        <Loader>
          <Spinner />
        </Loader>
      )}

      {children}
    </loaderContext.Provider>
  )
}

export const Loader = styled.div`
  background-color: ${(props) =>
    `${changeColorAlpha(getColor('black')(props), 0.25)}`};
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default LoaderProvider
