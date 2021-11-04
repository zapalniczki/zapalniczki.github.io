import 'styled-components'
import { Theme } from './theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare module 'use-breakpoints' {
  import useBreakpoints from 'use-breakpoints'

  interface Options {
    gzip: boolean
    rootDir: string
    rootPath: string
  }

  export default function useBreakpoints(): boolean
}
