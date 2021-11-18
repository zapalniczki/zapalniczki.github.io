import useBreakpoints from './useBreakpoints'

const useLoaderWidth = (column?: 'MAIN' | 'SIDE') => {
  const isTablet = useBreakpoints('tablet')
  const isDesktop = useBreakpoints('desktop')

  let width

  if (isDesktop) {
    width = 1200
  } else if (!isDesktop && isTablet) {
    width = 768
  } else {
    width = 320
  }

  if (column === 'MAIN') {
    if (isDesktop) {
      width = 840
    } else if (!isDesktop && isTablet) {
      width = 768
    } else {
      width = 320
    }
  }

  if (column === 'SIDE') {
    if (isDesktop) {
      width = 344
    } else if (!isDesktop && isTablet) {
      width = 768
    } else {
      width = 320
    }
  }

  return width
}

export default useLoaderWidth
