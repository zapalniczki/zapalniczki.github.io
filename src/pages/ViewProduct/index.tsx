import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BackButton, Page, Tile, QueryLoader } from 'components'
import { useScrollTop, usePageTitle } from 'hooks'

import { useTranslation } from 'hooks'
import Images from './Images'
import OtherLabels from './OtherLabels'
import { PRODUCTS } from 'constants/routes'
import Info from './Info'
import { getProduct } from 'api'
import Loader from './index.loader'
import OtherIcons from './OtherIcons'
import { useQuery } from 'react-query'
import { getProductName } from 'utils'

const ViewProduct = () => {
  const { t: commonT } = useTranslation('COMMON')
  const { t } = useTranslation('VIEW_PRODUCT')

  const navigate = useNavigate()
  const { id } = useParams<'id'>()

  if (!id) {
    throw new Error('No id!')
  }

  const params = { id }
  const productQuery = useQuery(['product', params], () => getProduct(params), {
    onError: () => navigate('/404')
  })

  let productName = `Produkt ${params.id}`

  if (
    productQuery &&
    productQuery.data?.label.label &&
    productQuery.data.icon.label
  ) {
    productName = getProductName(
      commonT('productNameBase'),
      productQuery.data.label.label,
      productQuery.data.icon.label
    )
  }

  useScrollTop(params.id)
  usePageTitle(t('title', { productName }))

  return (
    <Page>
      <QueryLoader Loader={<Loader />} query={productQuery}>
        {(product) => (
          <>
            <BackButton
              label={t('actions.goBack')}
              marginBottom="s-size"
              to={PRODUCTS}
            />

            <Tile flexDirection={['unset', 'column', 'column', 'row']}>
              <Images product={product} />

              <Info product={product} />
            </Tile>

            <OtherIcons iconId={product.icon.id} labelId={product.label.id} />

            <OtherLabels
              collectionId={product.collection_id}
              labelId={product.label.id}
            />
          </>
        )}
      </QueryLoader>
    </Page>
  )
}

export default ViewProduct
