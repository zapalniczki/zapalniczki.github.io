import { parseISO } from 'date-fns'
import format from 'date-fns/format'

export const displayDate = (date: Date | string) => {
  let parsedDate

  if (typeof date === 'string') {
    parsedDate = parseISO(date)
  } else {
    parsedDate = date
  }

  return format(parsedDate, 'HH:mm dd/MM/yyyy')
}

export default displayDate
