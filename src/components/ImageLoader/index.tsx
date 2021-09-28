import { Spinner } from 'components'
import React, { useState } from 'react'
import styled from 'styled-components'

type Props = {
  src: string
  alt?: string
  className?: string
  objectFit?: string
  objectPosition?: string
}

const ImageLoader = ({
  objectPosition,
  objectFit = 'contain',
  src,
  alt = ''
}: Props) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && (
        <SpinnerWrapper>
          <Spinner small />
        </SpinnerWrapper>
      )}

      <Image
        objectPosition={objectPosition}
        objectFit={objectFit}
        loaded={loaded}
        alt={alt || ''}
        onLoad={() => setLoaded(true)}
        src={src}
      />
    </>
  )
}

type ImageProps = {
  loaded: boolean
  objectFit: string
  objectPosition?: string
}

const Image = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  object-fit: ${(props) => props.objectFit};
  object-position: ${(props) => props.objectPosition};

  animation: fadeIn 0.3s ease;
  opacity: ${(props) => (props.loaded ? 1 : 0)};
`

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default ImageLoader
