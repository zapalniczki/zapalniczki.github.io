import { Color, Theme } from './theme'

type StyledProps = {
  theme: Theme
}

const getColor = (color: Color) => (props: StyledProps) => {
  return props.theme.colors[color]
}

export default getColor
