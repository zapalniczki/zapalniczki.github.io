import { Box } from 'components'
import React, { useEffect, useRef, useState, ReactNode } from 'react'
import { DisplayProps, GridAreaProps } from 'styled-system'

type Props = {
  children: ReactNode
  ratio?: number
} & GridAreaProps &
  DisplayProps

const Square = ({ children, ratio = 1, ...props }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(
    ref.current?.getBoundingClientRect().width
  )

  useEffect(() => {
    const handleResize = () => {
      const rect = ref.current?.getBoundingClientRect()

      if (rect) {
        setHeight(rect.width * ratio)
      }
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [ref, ratio])

  return (
    <Box height={`${height}px`} ref={ref} width="100%" {...props}>
      {children}
    </Box>
  )
}

export default Square
