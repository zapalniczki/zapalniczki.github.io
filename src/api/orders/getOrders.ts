import {
  collection,
  getDocs,
  getFirestore,
  query,
  where
} from 'firebase/firestore'
import { order } from 'models'
import { OrderStatus } from 'models/order'
import { useQuery } from 'react-query'
import { getCollection } from 'utils'

const getOrders = async (status?: OrderStatus) => {
  const db = getFirestore()
  const ref = collection(db, 'orders')

  let q = query(ref)

  if (status) {
    q = query(ref, where('status', '==', status))
  }

  const snapshot = await getDocs(q)
  const orders = getCollection(snapshot, order)

  return orders
}

export const useGetOrders = (status?: OrderStatus) => {
  const queryKey = getOrdersQueryKey(status)

  return useQuery(queryKey, () => getOrders(status))
}

export const getOrdersQueryKey = (status?: OrderStatus) =>
  status ? `orders/${status}` : 'orders'
