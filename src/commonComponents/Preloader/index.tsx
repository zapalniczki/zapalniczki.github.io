import { Flexbox, Spinner } from 'components'
import React from 'react'

const Preloader = () => (
  <Flexbox
    alignItems="center"
    height="100vh"
    justifyContent="center"
    width="100vw"
  >
    <Spinner />
  </Flexbox>
)

export default Preloader
