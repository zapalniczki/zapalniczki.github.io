import { getProducts } from 'api'
import {
  Box,
  ImageLoader,
  Link,
  QueryLoader,
  SectionHead,
  Table,
  Tile
} from 'components'
import { PRODUCTS_TABLE } from 'constants/db_tables'
import { VIEW_PRODUCT } from 'constants/routes'
import { useTranslation } from 'hooks'
import { multiply } from 'lodash'
import { GetOrderResponse, GetProductsResponseItem } from 'models'
import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import { generatePath } from 'react-router'
import { displayMoney, findCorrectProductImageSize } from 'utils'

type Props = {
  products: GetOrderResponse['products']
}

const ProductsTable = ({ products }: Props) => {
  const { t: commonT } = useTranslation('COMMON')
  const t = useTranslation('ORDER').withBase('SECTIONS.PRODUCTS')

  const productsQuery = useQuery(PRODUCTS_TABLE, getProducts)

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
        const shapedData = shapeData(details)

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
      price: p.price,
      quantity: p.quantity
    }
  })

  return productsDetails
}

const shapeData = (
  data: RichProductDetails[]
): Record<
  OrderProductsTableColumns,
  string | boolean | number | JSX.Element
>[] =>
  data.map((product) => {
    const productPath = generatePath(VIEW_PRODUCT, { id: product.id })
    const basketImage = findCorrectProductImageSize(product.images, 'BASKET')

    return {
      product_image: (
        <Box maxHeight="9rem" maxWidth="9rem" minHeight="9rem" minWidth="9rem">
          <ImageLoader src={basketImage} />
        </Box>
      ),
      product_name: (
        <Link showUnderline to={productPath}>
          {product.name}
        </Link>
      ),
      boxes_count: product.quantity,
      product_price: displayMoney(product.price),
      product_total: displayMoney(multiply(product.price, product.quantity))
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
