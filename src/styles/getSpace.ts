import { Space, Theme } from './theme'

type StyledProps = {
  theme: Theme
}

const getSpace = (space: Space) => (props: StyledProps) =>
  props.theme.space[space]

export default getSpace
