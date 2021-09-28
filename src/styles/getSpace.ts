import { Space, Theme } from './theme'

type StyledProps = {
  theme: Theme
}

const getSpace = (space: Space) => (props: StyledProps) => {
  return props.theme.space[space]
}

export default getSpace
