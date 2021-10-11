import parseISO from 'date-fns/parseISO'
import differenceInDays from 'date-fns/differenceInDays'

export const getDifferenceFromNow = (date: Date | string) => {
  let parsedDate

  if (typeof date === 'string') {
    parsedDate = parseISO(date)
  } else {
    parsedDate = date
  }

  const now = new Date()
  const diff = differenceInDays(now, parsedDate)

  return diff
}

export default getDifferenceFromNow
