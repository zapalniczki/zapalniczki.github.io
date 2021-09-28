const getRequiredOrNot = (label: string, required?: boolean) =>
  `${required ? '* ' : ''}${label}`

export default getRequiredOrNot
