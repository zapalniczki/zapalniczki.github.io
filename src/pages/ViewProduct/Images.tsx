import { Box } from '@zapalniczki/shared-components'
import { Flexbox, Image } from 'components'
import { useTranslation } from 'hooks'
import { GetProductResponse } from 'models'
import React from 'react'
import styled from 'styled-components'
import { findCorrectProductImageSize, getLanguageLabel } from 'utils'

type Props = {
  product: GetProductResponse
}

const Images = ({ product }: Props) => {
  const { language } = useTranslation('COMMON')
  const { images } = product

  const largeImage = findCorrectProductImageSize(images, 'LARGE')

  const productName = getLanguageLabel({
    language,
    label: product,
    name: true
  })

  const width = ['unset', '100%', '50%']

  return (
    <Flexbox
      justifyContent="center"
      maxWidth={width}
      minWidth={width}
      paddingBottom="m-size"
      paddingTop="m-size"
    >
      <Box>
        <ImageStyled alt={productName} size="LARGE" src={largeImage} />
      </Box>
    </Flexbox>
  )
}

const ImageStyled = styled(Image)`
  width: 100%;
  height: auto;
`

export default Images
