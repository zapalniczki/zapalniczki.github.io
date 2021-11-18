import { CheckboxFieldLoader, Columns } from 'components'
import React from 'react'
import { CheckoutTotalLoader } from 'organisms'

const Loader = () => (
  <Columns>
    <div>
      {[1, 2, 3].map((elem) => (
        <CheckboxFieldLoader
          key={elem}
          marginTop={elem === 1 ? 'unset' : 'm-size'}
        />
      ))}
    </div>

    <div>
      <CheckoutTotalLoader />
    </div>
  </Columns>
)

export default Loader
