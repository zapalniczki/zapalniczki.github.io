import { generatePath } from 'react-router'
import { ROUTES } from 'braty-common'

const getOrderPath = (id: string) => {
  const path = generatePath(ROUTES.ORDERS_ID, { id })

  return path
}

export default getOrderPath
