import { useLoaderWidth } from 'hooks'
import React from 'react'
import { ContentLoader, Columns } from 'components'
import { ContactDetailsLoader as ContactDetails } from 'organisms'

const Loader = () => (
  <Columns>
    <div>
      <OrderId />

      <OrderStatus />

      <Billing />

      <Products />
    </div>

    <div>
      <Details />

      <Shipping />

      <ContactDetails />
    </div>
  </Columns>
)

const OrderId = () => {
  const width = useLoaderWidth('MAIN')
  const height = 130.8

  return <ContentLoader height={height} width={width} />
}

const OrderStatus = () => {
  const width = useLoaderWidth('MAIN')
  const height = 152.6

  return <ContentLoader height={height} width={width} />
}

const Billing = () => {
  const width = useLoaderWidth('MAIN')
  const height = 450

  return <ContentLoader height={height} width={width} />
}

const Products = () => {
  const width = useLoaderWidth('MAIN')
  const height = 292

  return <ContentLoader height={height} width={width} />
}

const Details = () => {
  const width = useLoaderWidth('SIDE')
  const height = 241

  return <ContentLoader height={height} width={width} />
}

const Shipping = () => {
  const width = useLoaderWidth('SIDE')
  const height = 289

  return <ContentLoader height={height} width={width} />
}

export default Loader
