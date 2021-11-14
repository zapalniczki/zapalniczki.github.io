import React from 'react'
import styled, { keyframes } from 'styled-components'
import { ReactComponent as Svg } from 'assets/banners/christmas2021.svg'

const Christmas2021 = () => <Container />

const blink = keyframes`
  20%, 60%, 100% {
    opacity: 1;
    filter: blur(5px);
  }

  40%, 80% {
    opacity: 0;
    filter: blur(0px);
  }

`

const blinkAlternate = keyframes`
  20%, 40%, 60%, 80%, 100% {
    opacity: 1;
    filter: blur(5px);
  }

  10%, 30%, 50%, 70%, 90% {
    opacity: 0;
    filter: blur(0px);
  }

`

const Container = styled(Svg)`
  #star-1 {
    animation: ${blink} 4s ease-in-out infinite alternate;
    animation-delay: 0.26s;
  }

  #star-2 {
    animation: ${blinkAlternate} 5s ease-in-out infinite alternate;
    animation-delay: 0.14s;
  }

  #star-3 {
    animation: ${blink} 3s ease-in-out infinite alternate;
    animation-delay: 0s;
  }

  #star-4 {
    animation: ${blinkAlternate} 6s ease-in-out infinite alternate;
    animation-delay: 0.41s;
  }

  #star-5 {
    animation: ${blink} 4.5s ease-in-out infinite alternate;
    animation-delay: 1.03s;
  }

  #star-6 {
    animation: ${blinkAlternate} 7.2s ease-in-out infinite alternate;
    animation-delay: 1.11s;
  }
`

export default Christmas2021
