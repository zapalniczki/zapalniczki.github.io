import { BasketItemLoader } from 'organisms'
import { Flexbox } from 'components'
import React from 'react'

const Cart = () => (
  <Flexbox flexDirection="column" width="100%">
    {[1, 2, 3].map((elem) => (
      <BasketItemLoader first={elem === 1} inCart key={elem} />
    ))}
  </Flexbox>
)

export default Cart
