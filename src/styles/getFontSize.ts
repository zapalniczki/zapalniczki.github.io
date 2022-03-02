import { FontSize, Theme } from './theme'

type StyledProps = {
  theme: Theme
}

const getFontSize = (fontSize: FontSize) => (props: StyledProps) =>
  props.theme.fontSizes[fontSize]

export default getFontSize
