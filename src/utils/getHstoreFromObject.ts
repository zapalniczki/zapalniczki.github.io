const getHstoreFromObject = (
  obj: Record<string, string | number | boolean | null>
): string => {
  const result = Object.entries(obj)
    .map(([key, value]) => {
      const formattedKey = wrapWithQuotes(key)
      const formattedValue = wrapWithQuotes(value)

      return `${formattedKey}=>${formattedValue}`
    })
    .join(',')

  return result
}

const wrapWithQuotes = (string: string | number | boolean | null) =>
  `"${string}"`

export default getHstoreFromObject
