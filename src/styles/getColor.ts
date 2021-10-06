import { Color, Theme } from './theme'

type StyledProps = {
  theme: Theme
}

const getColor = (color: Color) => (props: StyledProps) =>
  props.theme.colors[color]

export default getColor
