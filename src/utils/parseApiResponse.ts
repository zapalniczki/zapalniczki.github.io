import { DocumentData, DocumentSnapshot } from 'firebase/firestore'
import { Schema } from 'zod'

function parseApiResponse<T>(
  schema: Schema<T>,
  response: DocumentSnapshot<DocumentData>
): T {
  if (response.exists()) {
    const data = response.data()
    const { id } = response

    const obj = {
      ...data,
      id
    }

    const parsedResponse = schema.safeParse(obj)

    if (parsedResponse.success) {
      return parsedResponse.data
    }

    throw new Error(parsedResponse.error.message)
  } else {
    throw new Error('Error Parse')
  }
}

export default parseApiResponse
