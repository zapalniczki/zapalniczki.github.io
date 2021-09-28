export const displayMoney = (n: number) => {
  const format = new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN'
  })

  // or use toLocaleString()
  return format.format(n)
}

export default displayMoney
