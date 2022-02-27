import { getProductsById } from 'api'
import { DB_TABLES } from 'braty-common'
import { Button, QueryLoader, SectionHead, Text, Tile } from 'components'
import { useTranslation } from 'hooks'
import uniq from 'lodash.uniq'
import { BasketItem, GetOrderResponse } from 'models'
import { checkoutContext } from 'providers'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { combineProductDataAndBasketItem } from 'utils'

type Props = {
  products: GetOrderResponse['products']
}

const Actions = ({ products }: Props) => {
  const t = useTranslation('ORDER').withBase('SECTIONS.ACTIONS')
  const { setCheckout } = useContext(checkoutContext)

  const ids = products.map((e) => e.product_id)
  const productsQuery = useQuery([DB_TABLES.PRODUCTS, ids], () =>
    getProductsById(ids)
  )

  return (
    <QueryLoader query={productsQuery}>
      {(data) => {
        const productDetails = combineProductDataAndBasketItem(data, products)
        const visibleProductDetails = productDetails.filter(
          (product) => product.visible
        )
        const canAddProductsToBasket = visibleProductDetails.length
        const displayEmptyState = !canAddProductsToBasket

        return (
          <Tile>
            <SectionHead separator title={t('title')} />

            {canAddProductsToBasket ? (
              <Button
                onClick={() => {
                  const orderProducts = visibleProductDetails.map(
                    (product) => ({
                      id: product.id,
                      price_pl: product.price_pl,
                      price_en: product.price_en,
                      quantity: product.quantity
                    })
                  )

                  setCheckout((prev) => {
                    const allBasketItems = [...prev.basket, ...orderProducts]
                    const uniqueBasketItems = uniq(
                      allBasketItems.map((product) => product.id)
                    )
                    const allBasketItemsWithUpdatedQuantitu =
                      uniqueBasketItems.map((productId) => {
                        const allTheseBasketItemsInBasket =
                          allBasketItems.filter(
                            (product) => product.id === productId
                          )
                        const firstBasketItemInBasket =
                          allTheseBasketItemsInBasket[0]

                        return {
                          ...firstBasketItemInBasket,
                          quantity: allTheseBasketItemsInBasket
                            .map((product) => product.quantity)
                            .reduce((prev, curr) => prev + curr, 0)
                        } as BasketItem
                      })

                    return {
                      ...prev,
                      basket: allBasketItemsWithUpdatedQuantitu
                    }
                  })
                }}
                size="medium"
                width="max-content"
              >
                {t('copyProductsToBasket')}
              </Button>
            ) : null}

            {displayEmptyState && <Text type="caption">{t('emptyState')}</Text>}
          </Tile>
        )
      }}
    </QueryLoader>
  )
}

export default Actions
