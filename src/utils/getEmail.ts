const getEmail = (email: string, subject?: string) => {
  const subjectPair = `?subject=${subject}`

  let fullString = `mailto:${email}`
  if (subject) {
    fullString += subjectPair
  }

  return fullString
}

export default getEmail
