import React from 'react'
import { ContentLoader, Columns } from 'components'
import { CustomerProfileLoader as CustomerProfile } from 'organisms'
import { useLoaderWidth } from 'hooks'

const Loader = () => (
  <Columns>
    <div>
      <Orders />
    </div>

    <div>
      <CustomerProfile />
    </div>
  </Columns>
)

const Orders = () => {
  const width = useLoaderWidth('MAIN')
  const height = 350

  return <ContentLoader height={height} width={width} />
}

export default Loader
