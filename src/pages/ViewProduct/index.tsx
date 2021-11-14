import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { BackButton, Page, Tile, QueryLoader } from 'components'
import { useScrollTop, useTabTitle } from 'hooks'

import { useTranslation } from 'hooks'
import Images from './Images'
import OtherLabels from './OtherLabels'
import { PRODUCTS } from 'constants/routes'
import Info from './Info'
import { getProduct } from 'api'
import Loader from './index.loader'
import OtherIcons from './OtherIcons'
import { useQuery } from 'react-query'
import { Product } from 'models'
import { getProductName } from 'utils'

const ViewProduct = () => {
  const history = useHistory()
  const params = useParams<{ id: Product['id'] }>()
  const { t: commonT } = useTranslation('COMMON')
  const { t } = useTranslation('VIEW_PRODUCT')

  const productQuery = useQuery(['product', params], () => getProduct(params), {
    onError: () => history.push('/404')
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
  useTabTitle(t('title', { productName }))

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
