const displayMoney = (n: number, negative?: boolean) => {
  const format = new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN'
  })

  if (negative) {
    return `-${format.format(n)}`
  }

  return format.format(n)
}

export default displayMoney
