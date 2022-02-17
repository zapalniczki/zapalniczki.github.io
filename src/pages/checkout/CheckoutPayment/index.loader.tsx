import { CheckboxFieldLoader, Columns, ContentLoader } from 'components'
import React, { Fragment } from 'react'
import { CheckoutTotalLoader } from 'organisms'

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

const Label = () => {
  const height = 34.4
  const width = 150

  return (
    <ContentLoader height={height} marginBottom="m-size" width={width}>
      <rect height={14.4} transform="translate(0, 10)" width={width} />
    </ContentLoader>
  )
}

export default Loader
