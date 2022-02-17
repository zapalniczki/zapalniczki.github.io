import { BasketItemLoader } from 'organisms'
import { Flexbox } from 'components'
import React from 'react'

const Cart = () => (
  <Flexbox flexDirection="column" width="100%">
    {[...new Array(3)].map((_elem, index) => (
      <BasketItemLoader first={!index} inCart key={index} />
    ))}
  </Flexbox>
)

export default Cart
