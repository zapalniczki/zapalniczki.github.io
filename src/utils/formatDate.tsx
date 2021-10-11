import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'

const formatDate = (date: Date | string) => {
  let parsedDate

  if (typeof date === 'string') {
    parsedDate = parseISO(date)
  } else {
    parsedDate = date
  }

  return format(parsedDate, 'HH:mm dd/MM/yyyy')
}

export default formatDate
