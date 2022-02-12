const calculateTotal = (arr: number[]) => {
  if (!arr || arr?.length === 0) {
    return 0
  }

  const total = arr.reduce((acc, val) => acc + val, 0)

  return parseFloat(total.toFixed(2))
}

export default calculateTotal
