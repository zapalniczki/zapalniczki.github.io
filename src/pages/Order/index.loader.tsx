import { useLoaderWidth } from 'hooks'
import React from 'react'
import { ContentLoader, Columns, BannerLoader as Banner } from 'components'
import { CustomerProfileLoader as CustomerProfile } from 'organisms'
import Actions from './Actions.loader'

const Loader = () => (
  <>
    <Banner />

    <Columns>
      <div>
        <OrderStatus />

        <Billing />

        <Products />
      </div>

      <div>
        <Actions />

        <Details />

        <Shipping />

        <CustomerProfile />
      </div>
    </Columns>
  </>
)

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
