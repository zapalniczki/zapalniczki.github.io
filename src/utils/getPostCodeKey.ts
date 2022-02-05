import { Country } from 'braty-common'
import { InputKey } from 'hooks'

const getPostCodeKey = (country: Country): InputKey => {
  switch (country) {
    case 'UNITED KINGDOM':
      return 'POST_CODE_UK'

    case 'GERMANY':
      return 'POST_CODE_DE'

    case 'POLAND':
    default:
      return 'POST_CODE_PL'
  }
}

export default getPostCodeKey
