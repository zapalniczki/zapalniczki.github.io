import { getProduct } from 'api'
import { ROUTES } from 'braty-common'
import { BackButton, Page, QueryLoader, Tile } from 'components'
import { usePageTitle, useScrollTop, useTranslation } from 'hooks'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { getLanguageLabel } from 'utils'
import Images from './Images'
import Loader from './index.loader'
import Info from './Info'
import OtherIcons from './OtherIcons'
import OtherLabels from './OtherLabels'

const ViewProduct = () => {
  const { currentLanguage } = useTranslation('COMMON')
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
    productQuery.data?.label.label_pl &&
    productQuery.data.icon.label_pl
  ) {
    productName = getLanguageLabel({
      language: currentLanguage,
      label: productQuery.data,
      name: true
    })
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
              to={ROUTES.PRODUCTS}
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
