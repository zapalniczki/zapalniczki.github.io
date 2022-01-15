import { EmailEvent, API } from 'braty-common'

type Payload = EmailEvent

export const triggerSendEmail = (payload: Payload) => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  const path = API.SEND_EMAIL
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify(payload)
  }

  return fetch(path, options)
}
