const getRequiredOrNot = (label: string, required?: boolean) =>
  `${label}${required ? ' *' : ''}`

export default getRequiredOrNot
