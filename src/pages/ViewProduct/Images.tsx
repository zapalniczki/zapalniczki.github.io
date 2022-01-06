import { Flexbox, Image } from 'components'

import styled from 'styled-components'
import React from 'react'
import { GetProductResponse } from 'models'
import getColor from 'styles/getColor'
import { findCorrectProductImageSize, getProductName } from 'utils'
import getSpace from 'styles/getSpace'
import breakpoints from 'styles/breakpoints'
import { useTranslation } from 'hooks'

type Props = {
  product: GetProductResponse
}

const Images = ({ product }: Props) => {
  const { t: commonT } = useTranslation('COMMON')
  const { images } = product

  const largeImage = findCorrectProductImageSize(images, 'LARGE')
  const thumbnailImage = findCorrectProductImageSize(images, 'THUMBNAIL')

  const productName = getProductName(
    commonT('productNameBase'),
    product.label.label_pl,
    product.icon.label_pl
  )
  const width = '60%'

  return (
    <Flexbox
      flexDirection={['unset', 'column-reverse', 'column-reverse', 'row']}
      flexGrow={4}
      height="100%"
      maxWidth={['unset', '100%', '100%', width]}
      minWidth={['unset', '100%', '100%', width]}
    >
      <Flexbox flexDirection="column" height="100%" width="6rem">
        {[thumbnailImage].map((image) => (
          <GalleryImageWrapper key={image.toString()} role="presentation">
            <Image size="THUMBNAIL" src={image} />
          </GalleryImageWrapper>
        ))}
      </Flexbox>

      <ImageWrapper>
        <Image alt={productName} size="LARGE" src={largeImage} />
      </ImageWrapper>
    </Flexbox>
  )
}

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  position: relative;

  & > * {
    width: 100%;
    height: auto;
  }

  ${(props) => breakpoints('desktop')`
    padding: ${`0 ${getSpace('xxxl-size')(props)}`};

    & > * {
      width: auto;
  }
  `}
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
    margin-top: ${getSpace('s-size')};
  }
`

export default Images
