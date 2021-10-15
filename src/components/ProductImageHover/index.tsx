import { css } from 'styled-components'

const ProductImageHover = css`
  img {
    &:last-child {
      display: none;
    }
  }

  &:hover {
    img {
      &:first-child {
        display: none;
      }

      &:last-child {
        display: block;
      }
    }
  }
`

export default ProductImageHover
