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
import { TranslateFunc, useTranslation } from 'hooks'
import { multiply } from 'lodash'
import { GetOrderResponse, GetProductsResponseItem } from 'models'
import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import { generatePath } from 'react-router'
import {
  findCorrectProductImageSize,
  getLanguageLabel,
  getLanguagePrice
} from 'utils'

type Props = {
  products: GetOrderResponse['products']
}

const ProductsTable = ({ products }: Props) => {
  const { currentLanguage, t: commonT } = useTranslation('COMMON')
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
        const details = getDetails(data, products)
        const shapedData = shapeData(details, commonT, currentLanguage)

        return (
          <Tile marginTop="m-size">
            <SectionHead title={t('title')} />

            <Table columns={columnsMemo} data={shapedData} />
          </Tile>
        )
      }}
    </QueryLoader>
  )
}

const getDetails = (
  data: GetProductsResponseItem[],
  products: GetOrderResponse['products']
): RichProductDetails[] => {
  const productsDetails = products.map((p) => {
    const details = data.find((d) => d.id === p.product_id)

    if (!details) {
      throw new Error(`No details for product ${p.product_id}`)
    }

    return {
      ...details,
      price_pl: p.price_pl,
      price_en: p.price_en,
      quantity: p.quantity
    }
  })

  return productsDetails
}

const shapeData = (
  data: RichProductDetails[],
  t: TranslateFunc,
  currentLanguage: Language
): Record<
  OrderProductsTableColumns,
  string | boolean | number | JSX.Element
>[] =>
  data.map((product) => {
    const productPath = generatePath(ROUTES.PRODUCTS_ID, { id: product.id })
    const basketImage = findCorrectProductImageSize(product.images, 'BASKET')
    const productName = getLanguageLabel({
      language: currentLanguage,
      label: product,
      name: true
    })

    const price = getLanguagePrice({
      language: currentLanguage,
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

type RichProductDetails = GetProductsResponseItem & {
  quantity: number
}

export default ProductsTable
