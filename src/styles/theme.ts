export const MAX_WIDTH = 1200

const colors = {
  'gray-light': '#F8F8F8',
  'gray-medium': '#DDDDDD',
  'gray-dark': '#9b9b9b',

  'paragraph-color': '#4a4a4a',
  'heading-color': '#1a1a1a',
  'dark-color': '#3a3a3a',
  'label-color': '#696868',

  white: 'rgb(255, 255, 255)',
  black: 'rgb(0, 0, 0)',

  red: 'rgba(247, 45, 45, 0.986)',
  green: '#3B9620',
  yellow: 'rgb(228, 165, 31)',

  'yellow-outline': 'rgb(255, 221, 0)',

  'braty-red': '#E6070F',
  'christmas-red': 'rgb(184, 0, 0)'
}

const zIndices = {
  toast: 100,
  modal: 80,
  basket: 60,
  hamburgerMenu: 70,
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
  'xxxs-size': '0.25rem',
  'xxs-size': '0.5rem',
  'xs-size': '1rem',
  's-size': '1.2rem',
  'm-size': '1.6rem',
  'l-size': '3.2rem',
  'xl-size': '4.8rem',
  'xxl-size': '5.6rem',
  'xxxl-size': '10rem',

  top: '10rem',
  bottom: '15rem'
}

export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  max: MAX_WIDTH
}

const radii = {
  tiny: '0.4rem',
  medium: '0.8rem',
  large: '5rem'
}

const shadows = {
  tile: `rgba(0, 0, 0, 0.008) 0px 1.8px 2.2px,
  rgba(0, 0, 0, 0.008) 0px 4.3px 5.2px, rgba(0, 0, 0, 0.01) 0px 8px 9.8px,
  rgba(0, 0, 0, 0.01) 0px 14.3px 17.4px,
  rgba(0, 0, 0, 0.016) 0px 26.7px 32.6px, rgba(0, 0, 0, 0.02) 0px 64px 78px`,
  button: '0 5px 15px 0 rgb(0 0 0 / 15%)'
}

const theme = {
  breakpoints: Object.values(breakpoints).map((val) => `${val}px`),
  colors,
  fontSizes,
  fontWeigths,
  letterSpacings,
  radii,
  shadows,
  space,
  zIndices
}

export type Breakpoint = keyof typeof breakpoints
export type Color = keyof typeof colors
export type Radius = keyof typeof radii
export type Shadow = keyof typeof shadows
export type Space = keyof typeof space
export type FontSize = keyof typeof fontSizes
export type Theme = typeof theme

export default theme
