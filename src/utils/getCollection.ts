import { DocumentData, QuerySnapshot } from '@firebase/firestore'
import { parseApiResponse } from 'utils'
import { Schema } from 'zod'

function getCollection<T>(
  snapshot: QuerySnapshot<DocumentData>,
  schema: Schema<T>
): T[] {
  const records: T[] = []

  snapshot.forEach((elem) => {
    const parsedElem = parseApiResponse(schema, elem)
    records.push(parsedElem)
  })

  return records
}

export default getCollection
