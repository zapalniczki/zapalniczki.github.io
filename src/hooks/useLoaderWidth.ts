import useBreakpoints from './useBreakpoints'

const useLoaderWidth = (column?: 'MAIN' | 'SIDE') => {
  const isMax = useBreakpoints('max')
  const isDesktop = useBreakpoints('desktop')
  const isTablet = useBreakpoints('tablet')

  let width
  if (isMax) {
    width = 1200
  } else if (!isMax && isDesktop) {
    width = 1024
  } else if (!isDesktop && isTablet) {
    width = 768
  } else {
    width = 320
  }

  if (column === 'MAIN') {
    if (isMax) {
      width = 840
    } else if (!isMax && isDesktop) {
      width = 716.8
    } else if (!isDesktop && isTablet) {
      width = 768
    } else {
      width = 320
    }
  }

  if (column === 'SIDE') {
    if (isMax) {
      width = 344
    } else if (!isMax && isDesktop) {
      width = 291.2
    } else if (!isDesktop && isTablet) {
      width = 768
    } else {
      width = 320
    }
  }

  return width
}

export default useLoaderWidth
