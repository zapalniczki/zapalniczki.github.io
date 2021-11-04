import { createGlobalStyle } from 'styled-components'
import getColor from './getColor'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;

  &:focus {
    outline: solid 0.3rem;
    outline-color: ${getColor('yellow-outline')};
  }
}

label {
  cursor: pointer;
}

html {
  font-size: 0.625em;
}

body {
  min-height: 100vh;
  height: 100%;

  font-family: 'Roboto', sans-serif;
  font-size: ${(props) => props.theme.fontSizes.baseFontSize};

  background: ${getColor('background-color')};
  overflow-x: hidden;
  margin: 0;
}

p {
  color: ${getColor('paragraph-color')};
  line-height: ${(props) => props.theme.space['line-height']};
}

strong {
  font-weight: bold;
}

span {
  color: ${getColor('paragraph-color')};
  font-size: ${(props) => props.theme.fontSizes['font-small']};
  position: relative;
}

li {
  list-style-type: none;
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.control-dots {
  top: 0;
  bottom: unset !important;
  justify-content: center;
  margin-bottom: 0 !important;

  & > *:last-child {
    margin-right: 0;
  }
}

.react-tabs__tab-list {
  margin-bottom: 0;
  border-bottom: none;
}
`

export default GlobalStyle
