import { Logo } from 'components'
import { Flexbox } from '@zapalniczki/shared-components'

import React from 'react'

const Preloader = () => (
  <Flexbox
    alignItems="center"
    flexDirection="column"
    height="100vh"
    justifyContent="center"
    width="100vw"
  >
    <Logo />
  </Flexbox>
)

export default Preloader
