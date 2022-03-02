import { Shadow, Theme } from './theme'

type StyledProps = {
  theme: Theme
}

const getShadow = (shadow: Shadow) => (props: StyledProps) =>
  props.theme.shadows[shadow]

export default getShadow
