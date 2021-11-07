import React from 'react'
import styled, { keyframes } from 'styled-components'
import { ReactComponent as Svg } from 'assets/banners/yourPlaceInYourPoint.svg'

const YourPlaceInYourPoint = () => <Container />

const blink = keyframes`
 0% {
    filter: blur(5px) brightness(1);
  }

  3% {
    filter: blur(5px) brightness(0);
  }

  6% {
    filter: blur(5px) brightness(0);
  }

  7% {
    filter: blur(5px) brightness(1);
  }

  8% {
    filter: blur(5px) brightness(0);
  }

  9% {
    filter: blur(5px) brightness(1);
  }

  10% {
    filter: blur(5px) brightness(0);
  }

  20% {
    filter: blur(5px) brightness(1);
  }

  50% {
    filter: blur(5px) brightness(1);
  }

  99% {
    filter: blur(5px) brightness(0);
  }

  100% {
    filter: blur(5px) brightness(1);
  }
`

const Container = styled(Svg)`
  #windows {
    animation: ${blink} 10s linear infinite alternate;
    animation-delay: 5s;
    filter: blur(0px) brightness(1);
  }
`

export default YourPlaceInYourPoint
