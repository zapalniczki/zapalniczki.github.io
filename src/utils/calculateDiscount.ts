import multiply from 'lodash/multiply'
import { Voucher } from 'models'

const calculateDiscount = (
  discount: Voucher['discount'],
  isFixed: Voucher['is_fixed'],
  cost: number
) => {
  if (isFixed) {
    return discount
  }

  return multiply(cost, discount)
}

export default calculateDiscount
