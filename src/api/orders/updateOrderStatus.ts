import { doc, getFirestore, Timestamp, updateDoc } from 'firebase/firestore'
import { queryClient } from 'index'
import { Order, OrderStatus } from 'models/order'
import { CurrentStatus } from 'pages/AdminOrders/Row'
import { loaderContext } from 'providers/LoaderProvider'
import { useContext, useEffect } from 'react'
import { useMutation } from 'react-query'

type UpdateOrderStatus = {
  id: string
  status: OrderStatus
}

const updateOrderStatus = async (payload: UpdateOrderStatus) => {
  const db = getFirestore()
  const ref = doc(db, 'orders', payload.id)

  const snapshot = await updateDoc(ref, {
    status: payload.status,
    modifiedAt: Timestamp.fromDate(new Date())
  })

  return snapshot
}

export const useUpdateOrderStatus = (
  order: Order,
  currentStatus: CurrentStatus
) => {
  const { show, hide } = useContext(loaderContext)
  const { mutateAsync: mutateUpdateOrderStatus } =
    useMutation(updateOrderStatus)

  useEffect(() => {
    if (currentStatus.value !== order.status) {
      show()
      mutateUpdateOrderStatus({
        id: order.id,
        status: currentStatus.value as OrderStatus
      })

      queryClient.invalidateQueries(`orders/${order.status}`)
      queryClient.invalidateQueries(`orders/${currentStatus.value}`)
      hide()
    }
  }, [currentStatus])
}
