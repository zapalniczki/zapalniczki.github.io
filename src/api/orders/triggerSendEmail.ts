import { useMutation } from 'react-query'
import { Email, Fullname, Phone } from 'Types'

type EventType =
  | {
      key: 'NEW_ORDER'
      content: {
        order_id: string
        phone: Phone
        name: Fullname
      }
    }
  | {
      key: 'NEWSLETTER_SIGNUP'
    }

type TriggerSendEmailPayload = {
  type: EventType
  to: Email
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
