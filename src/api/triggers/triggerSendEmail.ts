import { User } from 'models'
import { EmailEvent } from 'braty-common'

type Payload = {
  to: User['email']
  type: EmailEvent
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
