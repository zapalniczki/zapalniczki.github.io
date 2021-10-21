import { Voucher } from 'models'
import { useMutation } from 'react-query'
import { Email, Fullname, Phone } from 'types/index2'

type EventType =
  | {
      content: {
        name: Fullname
        order_id: string
        phone: Phone
      }
      key: 'NEW_ORDER'
    }
  | {
      content: {
        voucher_id: Voucher['id']
      }
      key: 'NEWSLETTER_SIGNUP'
    }

type TriggerSendEmailPayload = {
  to: Email
  type: EventType
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
