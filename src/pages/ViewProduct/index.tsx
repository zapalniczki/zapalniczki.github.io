import React from 'react'
import { useParams } from 'react-router-dom'
import { BackButton, Page, Tile, QueryLoader } from 'components'
import { useDocumentTitle, useScrollTop } from 'hooks'

import { useTranslation } from 'hooks'
import Images from './Images'
import OtherIcons from './OtherIcons'
import { PRODUCTS } from 'constants/routes'
import Info from './Info'
import { useGetProduct } from 'api'
import OtherPlaces from './OtherPlaces'
import Loader from './index.loader'

const ViewProduct = () => {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation('VIEW_PRODUCT')

  const productQuery = useGetProduct(id)

  useScrollTop(id)
  useDocumentTitle(
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

            <Tile flexDirection="row">
              <Images product={product} />

              <Info product={product} />
            </Tile>

            <OtherIcons
              iconId={product.mold.icon.id}
              labelId={product.mold.label.id}
            />

            <OtherPlaces
              collectionId={product.collection.id}
              labelId={product.mold.label.id}
            />
          </>
        )}
      </QueryLoader>
    </Page>
  )
}

export default ViewProduct
