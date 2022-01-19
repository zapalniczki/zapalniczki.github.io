const getPostCodeKey = (country: string) => {
  switch (country) {
    case 'United Kingdom':
      return 'POST_CODE_UK'

    case 'Germany':
      return 'POST_CODE_DE'

    case 'Poland':
    default:
      return 'POST_CODE_PL'
  }
}

export default getPostCodeKey
