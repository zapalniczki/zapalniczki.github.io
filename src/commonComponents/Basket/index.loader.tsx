import { BasketItemLoader } from 'organisms'
import { Flexbox } from 'components'
import React from 'react'

const Basket = () => (
  <Flexbox flexDirection="column" padding="s-size" width="100%">
    {[1, 2, 3].map((elem) => (
      <BasketItemLoader first={elem === 1} key={elem} />
    ))}
  </Flexbox>
)

export default Basket
