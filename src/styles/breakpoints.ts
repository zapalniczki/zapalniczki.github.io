/* eslint-disable @typescript-eslint/no-explicit-any */
import { parseBreakpointList, getBreakpointMediaQueryRules } from 'hooks'
import memoize from 'lodash/memoize'
import { css } from 'styled-components'

const breakpoints =
  (breakpointList: string) =>
  (first: any, ...interpolations: any[]) => {
    const rules = parseBreakpointList(breakpointList)
      .map(getBreakpointMediaQueryRules)
      .join()

    return css`
      @media ${rules} {
        ${css(first, ...interpolations)}
      }
    `.join('')
  }

export default memoize(breakpoints)
