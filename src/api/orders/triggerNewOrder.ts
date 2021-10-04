import { useMutation } from 'react-query'
import { Email, Fullname, Phone } from 'Types'

type TriggerSendEmailPayload = {
  name: Fullname
  to: Email
  type: {
    key: 'NEW_ORDER'
    content: {
      order_id: string
      phone: Phone
    }
  }
}

const triggerSendEmail = (payload: TriggerSendEmailPayload) => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  const path = 'https://en1oerk9p7kdazn.m.pipedream.net'
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify(payload)
  }

  return fetch(path, options)
}

export const useTriggerSendEmail = () => {
  const { mutateAsync } = useMutation(triggerSendEmail)

  return (payload: TriggerSendEmailPayload) => mutateAsync(payload)
}
