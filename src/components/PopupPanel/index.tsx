import Flexbox from '../Flexbox'
import { motion, AnimatePresence } from 'framer-motion'
import React, { forwardRef, ReactNode } from 'react'
import { useTheme } from 'styled-components'
import PanelHeader from './PanelHeader'

type Props = {
  children: ReactNode
  opposite?: boolean
}

const PopupPanel = forwardRef<HTMLDivElement, Props>(
  ({ children, opposite }, ref) => {
    const { zIndices } = useTheme()

    return (
      <AnimatePresence>
        <MotionFlexbox
          animate={{ x: 0 }}
          backgroundColor="white"
          exit={{ x: opposite ? '-100%' : '100%' }}
          flexDirection="column"
          height="100vh"
          initial={{ x: opposite ? '-100%' : '100%' }}
          layout
          left={opposite ? 0 : undefined}
          position="fixed"
          ref={ref}
          right={opposite ? undefined : 0}
          style={{
            width: '60rem',
            maxWidth: '100vw',
            height: '100vh',
            boxShadow: '0 1rem 1.5rem rgba(0, 0, 0, 0.08)'
          }}
          top={0}
          transition={{
            type: 'spring',
            mass: 0.3,
            duration: 0.05
          }}
          zIndex={zIndices.basket}
        >
          {children}
        </MotionFlexbox>
      </AnimatePresence>
    )
  }
)

PopupPanel.displayName = 'PopupPanel'

const MotionFlexbox = motion(Flexbox)

export { PanelHeader }
export default PopupPanel
