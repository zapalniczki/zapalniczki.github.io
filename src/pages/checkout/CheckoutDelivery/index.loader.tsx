import { CheckboxFieldLoader, Columns } from 'components'
import React, { Fragment } from 'react'
import { CheckoutTotalLoader } from 'organisms'
import { Label } from '../CheckoutPayment/index.loader'

const Loader = () => (
  <Columns>
    <div>
      {[...new Array(3)].map((_elem, index) => (
        <Fragment key={index}>
          {!index && <Label />}

          <CheckboxFieldLoader marginTop={!index ? 'unset' : 'm-size'} />
        </Fragment>
      ))}
    </div>

    <div>
      <CheckoutTotalLoader />
    </div>
  </Columns>
)

export default Loader
