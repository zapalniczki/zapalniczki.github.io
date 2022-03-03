import { useRef, useState, useEffect } from 'react'
// eslint-disable-next-line no-restricted-imports
import { Breakpoint, breakpoints as breakpointsDefinition } from 'styles/theme'
import debounce from 'lodash/fp/debounce'

function useBreakpoints(breakpointList: string) {
  const rules = parseBreakpointList(breakpointList)
    .map(getBreakpointMediaQueryRules)
    .join()

  return useMediaQuery(rules)
}

export function getBreakpointMediaQueryRules(name: Breakpoint) {
  const [start, end] = getBreakpointRange(name)

  let rule = `(min-width: ${start / 16}em)`
  if (end) rule += ` and (max-width: ${(end - 1) / 16}em)`

  return rule
}

function assertCorrectBreakpointNames(
  names: string[]
): asserts names is Breakpoint[] {
  names.forEach((name) => {
    if (!(name in breakpointsDefinition))
      throw new Error(`Invalid breakpoint name: ${name}.`)
  })
}

export function parseBreakpointList(breakpointList: string) {
  const breakpointNames = breakpointList.split(' ').map((str) => str.trim())
  assertCorrectBreakpointNames(breakpointNames)

  return breakpointNames
}

function getBreakpointRange(name: Breakpoint) {
  const breakpointValues = Object.values(breakpointsDefinition)
  const value = breakpointsDefinition[name]

  const index = breakpointValues.indexOf(value)
  const nextValue = breakpointValues[index + 1]

  return [value, nextValue ?? nextValue - 1]
}

function useMediaQuery(query: string): boolean {
  const mediaQueryList = useRef(window.matchMedia(query))

  const [matches, setMatches] = useState(mediaQueryList.current.matches)

  useEffect(() => {
    const onChange = debounce(200, (event: MediaQueryListEvent) =>
      setMatches(event.matches)
    )
    const currentList = mediaQueryList.current

    if ('addEventListener' in currentList) {
      currentList.addEventListener('change', onChange)

      return () => {
        currentList.removeEventListener('change', onChange)
        onChange.flush()
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const nonStandardList = currentList as any
    if ('addListener' in nonStandardList) {
      nonStandardList.addListener(onChange)

      return () => {
        nonStandardList.removeListener(onChange)
        onChange.flush()
      }
    }

    return () => onChange.flush()
  })

  return matches
}

export default useBreakpoints
