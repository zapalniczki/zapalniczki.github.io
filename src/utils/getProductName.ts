const getProductName = (base: string, label: string, icon: string) => {
  if (label === '-') {
    return `${base} ${icon}`
  }

  return `${base} ${label}, ${icon}`
}

export default getProductName
