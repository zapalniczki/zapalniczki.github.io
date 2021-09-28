import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { mold } from 'models'
import { useQuery } from 'react-query'
import { getCollection } from 'utils'

const getMolds = async () => {
  const db = getFirestore()
  const ref = collection(db, 'molds')

  const snapshot = await getDocs(ref)
  const orders = getCollection(snapshot, mold)

  return orders
}

export const useGetMolds = () => useQuery(getMoldsQueryKey, getMolds)

export const getMoldsQueryKey = 'molds'
export default getMolds
