import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { BackButton, Page, Tile, QueryLoader } from 'components'
import { useScrollTop, useTabTitle } from 'hooks'

import { useTranslation } from 'hooks'
import Images from './Images'
import OtherPlaces from './OtherPlaces'
import { PRODUCTS } from 'constants/routes'
import Info from './Info'
import { getProduct } from 'api'
import Loader from './index.loader'
import OtherIcons from './OtherIcons'
import { useQuery } from 'react-query'
import { Product } from 'models'

const ViewProduct = () => {
  const history = useHistory()
  const params = useParams<{ id: Product['id'] }>()
  const { t } = useTranslation('VIEW_PRODUCT')

  const productQuery = useQuery(['product', params], () => getProduct(params), {
    onError: () => history.push('/404')
  })

  useScrollTop(params.id)
  useTabTitle(
    t('title', {
      productName: productQuery.data ? productQuery.data.name : 'Produkt'
    })
  )

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

            <OtherPlaces
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
