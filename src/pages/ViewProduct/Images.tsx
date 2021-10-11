import { Flexbox } from 'components'

import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { ImageLoader } from 'components'
import { GetProductResponse } from 'api'
// import getColor from 'styles/getColor'

type Props = {
  product: GetProductResponse
}

const Images = ({ product }: Props) => {
  const { image, name } = product
  const [selectedImage, setSelectedImage] = useState<string>(image.large)

  useEffect(() => {
    const url = image.large

    if (url) {
      setSelectedImage(url)
    }
  }, [product])

  const width = '60%'

  return (
    <Flexbox
      flexDirection="column"
      flexGrow={4}
      height="100%"
      maxWidth={width}
      minWidth={width}
    >
      <Flexbox display="flex" height="100%">
        <Flexbox flexDirection="column" height="100%" width="6rem">
          {/* {[image.thumbnail].map((image) => (
            <GalleryImageWrapper
              key={image}
              onClick={() => setSelectedImage(image)}
              role="presentation"
            >
              <ImageLoader src={image} />
            </GalleryImageWrapper>
          ))} */}
        </Flexbox>

        <ImageWrapper>
          <ImageLoader alt={name} src={selectedImage} />
        </ImageWrapper>
      </Flexbox>
    </Flexbox>
  )
}

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  position: relative;
  padding: ${(props) => `0 ${props.theme.space['xxxl-size']}`};
`

// const GalleryImageWrapper = styled.div`
//   min-width: 6rem;
//   max-width: 6rem;
//   min-height: 6rem;
//   max-height: 6rem;
//   border: 1px solid;
//   border-color: ${getColor('border-color')};
//   position: relative;
//   cursor: pointer;

//   &:not(:first-child) {
//     margin-top: ${(props) => props.theme.space['s-size']};
//   }
// `

export default Images
