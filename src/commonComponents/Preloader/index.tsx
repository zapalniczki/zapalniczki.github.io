import { Flexbox, Spinner } from 'components'
import React from 'react'

const Preloader = () => (
  <Flexbox
    width="100vw"
    height="100vh"
    justifyContent="center"
    alignItems="center"
  >
    <Spinner />
  </Flexbox>
)

export default Preloader
