import { Order, User, Voucher } from 'models'

type Payload = {
  to: User['email']
  type: EventType
}

export const triggerSendEmail = (payload: Payload) => {
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

type EventType =
  | {
      content: {
        is_long?: boolean
        name: User['full_name']
        order_id: Order['id']
        phone: User['phone']
      }
      key: 'NEW_ORDER'
    }
  | {
      content: {
        voucher_id: Voucher['id']
      }
      key: 'NEWSLETTER_SIGNUP'
    }
  | {
      content: {
        name: User['full_name']
        order_id: Order['id']
        order_status: Order['status']
      }
      key: 'ORDER_STATUS_CHANGE'
    }
