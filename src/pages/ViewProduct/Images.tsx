import { Flexbox, Image } from 'components'

import styled from 'styled-components'
import React from 'react'
import { GetProductResponse } from 'models'
import getColor from 'styles/getColor'
import { findCorrectProductImageSize } from 'utils'

type Props = {
  product: GetProductResponse
}

const Images = ({ product }: Props) => {
  const { images, name } = product

  const largeImage = findCorrectProductImageSize(images, 'LARGE')
  const thumbnailImage = findCorrectProductImageSize(images, 'THUMBNAIL')

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
          {[thumbnailImage].map((image) => (
            <GalleryImageWrapper key={image.toString()} role="presentation">
              <Image size="THUMBNAIL" src={image} />
            </GalleryImageWrapper>
          ))}
        </Flexbox>

        <ImageWrapper>
          <Image alt={name} size="LARGE" src={largeImage} />
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

const GalleryImageWrapper = styled.div`
  min-width: 6rem;
  max-width: 6rem;
  min-height: 6rem;
  max-height: 6rem;
  border: 1px solid;
  border-color: ${getColor('border-color')};
  position: relative;
  cursor: pointer;

  &:not(:first-child) {
    margin-top: ${(props) => props.theme.space['s-size']};
  }
`

export default Images
