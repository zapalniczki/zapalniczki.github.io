import { ORDERS_ID } from 'constants/routes'
import { generatePath } from 'react-router'

const getOrderPath = (id: string) => {
  const path = generatePath(ORDERS_ID, { id })

  return path
}

export default getOrderPath
