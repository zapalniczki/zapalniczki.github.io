import multiply from 'lodash.multiply'

const getVatAmount = (amount: number) => multiply(0.23, amount)

export default getVatAmount
