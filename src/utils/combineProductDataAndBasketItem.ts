import { GetOrderResponse, GetProductsResponseItem } from 'models'

const combineProductDataAndBasketItem = (
  data: GetProductsResponseItem[],
  products: GetOrderResponse['products']
): ProductAndBasketItemDetails[] => {
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

export type ProductAndBasketItemDetails = GetProductsResponseItem & {
  quantity: number
}

export default combineProductDataAndBasketItem
