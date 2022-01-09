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


strong {
  font-weight: bold;
}

li {
  list-style-type: none;
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

// COOKIES-CONSENT
.CookieConsent {
    background-color: ${getColor('banner-color')} !important;
    align-items: center !important;
    position: static !important;
}

// REACT-TABS
.react-tabs__tab-panel {
    display: none;
}

.react-tabs__tab-panel--selected {
    display: block;
}

.react-tabs {
    -webkit-tap-highlight-color: transparent;
}

.react-tabs__tab-list {
    margin: 0 0 10px;
    padding: 0;
    border-bottom: none;
    margin-bottom: 0;
}

.react-tabs__tab {
    display: inline-block;
    border: 1px solid transparent;
    border-bottom: none;
    bottom: -1px;
    position: relative;
    list-style: none;
    padding: 6px 12px;
    cursor: pointer;
}

.react-tabs__tab--selected {
    background: #fff;
    border-color: #aaa;
    color: black;
    border-radius: 5px 5px 0 0;
}

// REACT-CAROUSEL
.control-dots {
  top: 0;
  bottom: unset !important;
  justify-content: center;
  margin-bottom: 0 !important;
  display: flex;
  justify-content: center;

  & > *:last-child {
    margin-right: 0;
  }
}

.carousel-root {
    outline: none
}

.carousel {
    position: relative;
    width: 100%
}

.carousel * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

.carousel.carousel-slider {
    margin: 0;
    overflow: hidden;
    position: relative
}

.carousel .slider-wrapper {
    margin: auto;
    overflow: hidden;
    -webkit-transition: height .15s ease-in;
    -moz-transition: height .15s ease-in;
    -ms-transition: height .15s ease-in;
    -o-transition: height .15s ease-in;
    transition: height .15s ease-in;
    width: 100%
}

.carousel .slider-wrapper.axis-horizontal .slider {
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex
}

.carousel .slider-wrapper.axis-horizontal .slider .slide {
    flex-direction: column;
    flex-flow: column
}

.carousel .slider {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%
}

.carousel .slider.animated {
    -webkit-transition: all .35s ease-in-out;
    -moz-transition: all .35s ease-in-out;
    -ms-transition: all .35s ease-in-out;
    -o-transition: all .35s ease-in-out;
    transition: all .35s ease-in-out
}

.carousel .slide {
    margin: 0;
    min-width: 100%;
    position: relative;
    text-align: center
}

.carousel .control-dots {
    bottom: 0;
    margin: 10px 0;
    padding: 0;
    position: absolute;
    text-align: center;
    width: 100%;
    z-index: 1
}

@media (min-width: 960px) {
    .carousel .control-dots {
        bottom:0
    }
}

// REACT-TOAST
:root {
    --toastify-color-light: #fff;
    --toastify-color-dark-color: #121212;
    --toastify-color-info: #3498db;
    --toastify-color-success: #07bc0c;
    --toastify-color-warning: #f1c40f;
    --toastify-color-error: #e74c3c;
    --toastify-color-transparent: hsla(0,0%,100%,.7);
    --toastify-icon-color-info: var(--toastify-color-info);
    --toastify-icon-color-success: var(--toastify-color-success);
    --toastify-icon-color-warning: var(--toastify-color-warning);
    --toastify-icon-color-error: var(--toastify-color-error);
    --toastify-toast-width: 320px;
    --toastify-toast-background: #fff;
    --toastify-toast-min-height: 64px;
    --toastify-toast-max-height: 800px;
    --toastify-font-family: sans-serif;
    --toastify-z-index: 9999;
    --toastify-text-color-light: #757575;
    --toastify-text-color-dark-color: #fff;
    --toastify-text-color-info: #fff;
    --toastify-text-color-success: #fff;
    --toastify-text-color-warning: #fff;
    --toastify-text-color-error: #fff;
    --toastify-spinner-color: #616161;
    --toastify-spinner-color-empty-area: #e0e0e0;
    --toastify-color-progress-light: linear-gradient(90deg,#4cd964,#5ac8fa,#007aff,#34aadc,#5856d6,#ff2d55);
    --toastify-color-progress-dark-color: #bb86fc;
    --toastify-color-progress-info: var(--toastify-color-info);
    --toastify-color-progress-success: var(--toastify-color-success);
    --toastify-color-progress-warning: var(--toastify-color-warning);
    --toastify-color-progress-error: var(--toastify-color-error)
}

.Toastify__toast-container {
    z-index: var(--toastify-z-index);
    -webkit-transform: translate3d(0, 0, var(--toastify-z-index) px);
    position: fixed;
    padding: 4px;
    width: var(--toastify-toast-width);
    box-sizing: border-box;
    color: #fff;
}

.Toastify__toast-container--top-right {
    top: 1em;
    right: 1em;
}

.Toastify__toast {
    position: relative;
    min-height: var(--toastify-toast-min-height);
    box-sizing: border-box;
    margin-bottom: 1rem;
    padding: 8px;
    border-radius: 4px;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05);
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    max-height: var(--toastify-toast-max-height);
    overflow: hidden;
    font-family: var(--toastify-font-family);
    cursor: pointer;
    direction: ltr;
}

.Toastify__toast-body {
    margin: auto 0;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 6px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
}

.Toastify__toast-body > div:last-child {
    -ms-flex: 1;
    flex: 1;
}

.Toastify--animate {
    animation-fill-mode: both;
    animation-duration: 0.7s;
}

.Toastify__toast-theme--light {
    background: var(--toastify-color-light);
    color: var(--toastify-text-color-light);
}

.Toastify__progress-bar-theme--light {
    background: var(--toastify-color-progress-light);
}

.Toastify__close-button {
    color: #fff;
    background: transparent;
    outline: none;
    border: none;
    padding: 0;
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s ease;
    -ms-flex-item-align: start;
    align-self: flex-start;
}

.Toastify__close-button--light {
    color: #000;
    opacity: 0.3;
}

.Toastify__close-button > svg {
    fill: currentColor;
    height: 16px;
    width: 14px;
}

.Toastify__progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    z-index: var(--toastify-z-index);
    opacity: 0.7;
    transform-origin: left;
}

.Toastify__progress-bar--animated {
    animation: Toastify__trackProgress linear 1 forwards;
}

.Toastify__bounce-enter--top-right, .Toastify__bounce-enter--bottom-right {
    animation-name: Toastify__bounceInRight;
}

.Toastify__bounce-exit--top-right, .Toastify__bounce-exit--bottom-right {
    animation-name: Toastify__bounceOutRight;
}

@keyframes Toastify__bounceInRight {
    from, 60%, 75%, 90%, to {
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    from {
        opacity: 0;
        transform: translate3d(3000px, 0, 0);
    }

    60% {
        opacity: 1;
        transform: translate3d(-25px, 0, 0);
    }

    75% {
        transform: translate3d(10px, 0, 0);
    }

    90% {
        transform: translate3d(-5px, 0, 0);
    }

    to {
        transform: none;
    }
}

@keyframes Toastify__bounceOutRight {
    20% {
        opacity: 1;
        transform: translate3d(-20px, 0, 0);
    }

    to {
        opacity: 0;
        transform: translate3d(2000px, 0, 0);
    }
}

`

export default GlobalStyle
