import { BasketItemLoader } from 'organisms'
import { Flexbox } from '@zapalniczki/shared-components'
import React from 'react'

const Basket = () => (
  <Flexbox flexDirection="column" padding="s-size" width="100%">
    {[...new Array(3)].map((_elem, index) => (
      <BasketItemLoader first={!index} key={index} />
    ))}
  </Flexbox>
)

export default Basket
