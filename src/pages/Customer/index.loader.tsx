import React from 'react'
import { ContentLoader, Columns } from 'components'
import { ContactDetailsLoader as ContactDetails } from 'organisms'
import { useLoaderWidth } from 'hooks'

const Loader = () => (
  <Columns>
    <div>
      <Orders />
    </div>

    <div>
      <ContactDetails />
    </div>
  </Columns>
)

const Orders = () => {
  const width = useLoaderWidth('MAIN')
  const height = 350

  return <ContentLoader height={height} width={width} />
}

export default Loader
