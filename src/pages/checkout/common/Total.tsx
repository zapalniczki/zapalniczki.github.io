import { Flexbox } from 'components'
import { calculateDiscount, getVatAmount, sumArray } from 'utils'
import React, { useContext } from 'react'
import { checkoutContext } from 'providers'
import add from 'lodash.add'
import subtract from 'lodash.subtract'
import multiply from 'lodash.multiply'
import TotalRow from './TotalRow'

type Props = {
  customDelivery?: number
  customPayment?: number
  customProducts?: number
}

const Total = ({ customDelivery, customPayment, customProducts }: Props) => {
  const { checkout, voucher } = useContext(checkoutContext)
  const { basket, total } = checkout

  const products =
    customProducts !== undefined
      ? customProducts
      : sumArray(
          basket.map((product) => multiply(product.quantity, product.price))
        )

  const delivery =
    customDelivery !== undefined ? customDelivery : total.delivery || 0

  const payment =
    customPayment !== undefined ? customPayment : total.payment || 0

  const cost = add(add(products, delivery), payment)

  let discount = 0
  if (voucher) {
    discount = calculateDiscount(voucher.discount, voucher.is_fixed, cost)
  }

  const grandTotal = subtract(cost, discount)
  const vat = getVatAmount(grandTotal)

  return (
    <Flexbox
      alignItems="center"
      border="1px solid green"
      justifyContent="flex-end"
    >
      <table>
        <tbody>
          <TotalRow amount={products} label="products" />

          <TotalRow amount={delivery} label="delivery" />

          <TotalRow amount={payment} label="payment" />

          <TotalRow amount={discount} label="discount" negative />

          <TotalRow amount={grandTotal} bold label="total" />

          <TotalRow amount={vat} label="vat" />
        </tbody>
      </table>
    </Flexbox>
  )
}

export default Total
