import { CheckboxFieldLoader, Columns } from 'components'
import React from 'react'
import { CheckoutTotalLoader } from 'organisms'

const Loader = () => (
  <Columns>
    <div>
      {[...new Array(3)].map((_elem, index) => (
        <CheckboxFieldLoader
          key={index}
          marginTop={!index ? 'unset' : 'm-size'}
        />
      ))}
    </div>

    <div>
      <CheckoutTotalLoader />
    </div>
  </Columns>
)

export default Loader
