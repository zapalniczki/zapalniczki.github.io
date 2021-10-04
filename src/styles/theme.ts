const colors = {
  'nav-bg': '#f8f8f8',
  'nav-bg-scrolled': '#fff',
  'background-color': '#f9f9f9',
  'background-color-01': '#f2f2f2',
  'paragraph-color': '#4a4a4a',
  'heading-color': '#1a1a1a',

  'border-color': 'rgb(225, 225, 225)',
  'border-color-focus': '#c5c5c5',

  white: 'rgb(255, 255, 255)',
  black: 'rgb(0, 0, 0)',
  'off-black': '#303030',
  'off-white': '#f0f0f0',

  red: 'rgba(247, 45, 45, 0.986)',
  green: 'rgb(59, 150, 32)',
  yellow: 'rgb(228, 165, 31)',
  'yellow-outline': 'rgb(255, 221, 0)',

  'gray-01': '#3a3a3a',
  'gray-10': '#818181',
  'gray-20': '#b6b6b6',

  'button-color': '#101010',
  'button-hover': '#101010',

  'color-success': '#000',
  'label-color': '#696868',

  'braty-red': 'rgb(230, 7, 15)'
}

const zIndices = {
  toast: 100,
  modal: 80,
  basket: 60,
  navigation: 55,
  filter: 40,
  search: 30,
  content: 10
}

const fontSizes = {
  baseFontSize: '1.6rem',
  'font-small': '1.2rem',
  'font-medium': '1.5rem',
  'font-large': '2rem',
  'font-xlarge': '4rem',

  'new-huge-s-size': '9.6rem',

  'new-large-l-size': '6.0rem',
  'new-large-m-size': '4.8rem',
  'new-large-s-size': '3.4rem',

  'new-medium-l-size': '2.4rem',
  'new-medium-m-size': '2.0rem',
  'new-medium-s-size': '1.6rem',

  'new-small-l-size': '1.4rem',
  'new-small-m-size': '1.2rem',
  'new-small-s-size': '1.0rem'
}

const letterSpacings = {
  100: '-0.15rem',
  200: '-0.05rem',
  300: '0',
  400: '0.01rem',
  500: '0.015rem',
  600: '0.025rem',
  700: '0.04rem',
  800: '0.05rem',
  900: '0.125rem',
  1000: '0.15rem'
}

const fontWeigths = {
  light: '300',
  regular: '400',
  medium: '500',
  bold: '700'
}

const space = {
  'nav-height': '6rem',

  'xxs-size': '0.5rem',
  'xs-size': '1rem',
  's-size': '1.2rem',
  'm-size': '1.6rem',
  'l-size': '3.2rem',
  'xl-size': '4.8rem',
  'xxl-size': '5.6rem',
  'xxxl-size': '10rem',

  top: '10rem',
  'top-mobile': '8.5rem',
  bottom: '15rem',
  'line-height': '2.4rem',

  'pad-desktop': '10rem'
}

const theme = {
  colors,
  space,
  zIndices,
  fontSizes,
  fontWeigths,
  letterSpacings
}

export type Theme = typeof theme
export type Color = keyof typeof colors
export type Space = keyof typeof space

export default theme
