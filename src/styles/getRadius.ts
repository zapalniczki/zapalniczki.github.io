import { Radius, Theme } from './theme'

type StyledProps = {
  theme: Theme
}

const getRadius = (radius: Radius) => (props: StyledProps) =>
  props.theme.radii[radius]

export default getRadius
