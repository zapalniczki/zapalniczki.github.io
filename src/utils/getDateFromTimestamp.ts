import { Timestamp } from 'firebase/firestore'
import { TimestampDate } from 'models/timestampDate'

const getDateFromTimestamp = (timestampDate: TimestampDate) => {
  const timestamp = new Timestamp(
    timestampDate.seconds,
    timestampDate.nanoseconds
  )

  const date = timestamp.toDate()

  return date
}

export default getDateFromTimestamp
