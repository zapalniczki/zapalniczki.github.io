import { ORDERS } from 'constants/routes'
import { generatePath } from 'react-router'

const getOrderPath = (id: string) => {
  const path = generatePath(ORDERS, { id })

  return path
}

export default getOrderPath
