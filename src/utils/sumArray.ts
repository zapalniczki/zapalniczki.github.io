import add from 'lodash/add'

const sumArray = (numbers: number[]) =>
  numbers.reduce((acc, curr) => add(acc, curr), 0)

export default sumArray
