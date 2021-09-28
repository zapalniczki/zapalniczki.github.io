import format from 'date-fns/format'

export const displayDate = (date: Date) => format(date, 'HH:mm dd/MM/yyyy')

export default displayDate
