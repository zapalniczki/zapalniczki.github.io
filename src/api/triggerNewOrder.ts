import { useMutation } from 'react-query'
import { AddOrderPayload } from './addOrder'

type TriggerNewOrderPayload = {
  order: AddOrderPayload
  order_id: string
  to: string
}

const triggerNewOrder = (payload: TriggerNewOrderPayload) => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  const path = 'https://en226xi0lt4gdzu.m.pipedream.net'
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify(payload)
  }

  return fetch(path, options)
}

export const useTriggerNewOrder = () => {
  const { mutateAsync } = useMutation(triggerNewOrder)

  return (payload: TriggerNewOrderPayload) => mutateAsync(payload)
}

export default triggerNewOrder
