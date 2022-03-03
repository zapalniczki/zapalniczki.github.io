import { getProductsById } from 'api'
import { DB_TABLES, ROUTES, Language } from 'braty-common'
import {
  Box,
  DisplayMoney,
  Image,
  Link,
  QueryLoader,
  SectionHead,
  Table,
  Tile
} from 'components'
import { useTranslation } from 'hooks'
import { multiply } from 'lodash'
import { GetOrderResponse } from 'models'
import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import { generatePath } from 'react-router'
import {
  combineProductDataAndBasketItem,
  findCorrectProductImageSize,
  getLanguageLabel,
  getLanguagePrice,
  ProductAndBasketItemDetails
} from 'utils'

type Props = {
  products: GetOrderResponse['products']
}

const Products = ({ products }: Props) => {
  const { language, t: commonT } = useTranslation('COMMON')
  const t = useTranslation('ORDER').withBase('SECTIONS.PRODUCTS')

  const ids = products.map((e) => e.product_id)
  const productsQuery = useQuery([DB_TABLES.PRODUCTS, ids], () =>
    getProductsById(ids)
  )

  const columns: OrderProductsTableColumns[] = [
    'product_image',
    'product_name',
    'boxes_count',
    'product_price',
    'product_total'
  ]
  const columnsMemo = useMemo(
    () =>
      columns.map((column) => ({
        Header: commonT(`TABLE_HEADERS.${column}`),
        accessor: column
      })),

    []
  )

  return (
    <QueryLoader query={productsQuery}>
      {(data) => {
        const productData = combineProductDataAndBasketItem(data, products)
        const shapedData = shapeData(productData, language)

        return (
          <Tile>
            <SectionHead title={t('title')} />

            <Table columns={columnsMemo} data={shapedData} />
          </Tile>
        )
      }}
    </QueryLoader>
  )
}

const shapeData = (
  data: ProductAndBasketItemDetails[],
  language: Language
): Record<
  OrderProductsTableColumns,
  string | boolean | number | JSX.Element
>[] =>
  data.map((product) => {
    const productPath = generatePath(ROUTES.PRODUCTS_ID, { id: product.id })
    const basketImage = findCorrectProductImageSize(product.images, 'BASKET')
    const productName = getLanguageLabel({
      language,
      label: product,
      name: true
    })

    const price = getLanguagePrice({
      language,
      price: product
    })

    return {
      product_image: (
        <Box maxHeight="9rem" maxWidth="9rem" minHeight="9rem" minWidth="9rem">
          <Image size="BASKET" src={basketImage} />
        </Box>
      ),
      product_name: <Link label={productName} showUnderline to={productPath} />,
      boxes_count: product.quantity,
      product_price: <DisplayMoney>{price}</DisplayMoney>,
      product_total: (
        <DisplayMoney>{multiply(price, product.quantity)}</DisplayMoney>
      )
    }
  })

type OrderProductsTableColumns =
  | 'product_image'
  | 'product_name'
  | 'boxes_count'
  | 'product_price'
  | 'product_total'

export default Products
