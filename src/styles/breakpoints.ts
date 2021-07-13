import { css } from "styled-components/macro";
import { breakpoints as breakpointsDefinition } from "./theme";

export type BreakpointName = keyof typeof breakpoints;

const breakpoints =
  (breakpointList: string) =>
  (first: any, ...interpolations: any[]) => {
    const rules = parseBreakpointList(breakpointList)
      .map(getBreakpointMediaQueryRules)
      .join();
    return css`
      @media ${rules} {
        ${css(first, ...interpolations)}
      }
    `.join("");
  };

export default breakpoints;

export function parseBreakpointList(breakpointList: string) {
  const breakpointNames = breakpointList.split(" ").map((str) => str.trim());
  assertCorrectBreakpointNames(breakpointNames);
  return breakpointNames;
}

function assertCorrectBreakpointNames(
  names: string[]
): asserts names is BreakpointName[] {
  names.forEach((name) => {
    if (!(name in breakpointsDefinition))
      throw new Error(`Invalid breakpoint name: ${name}.`);
  });
}

export function getBreakpointMediaQueryRules(name: BreakpointName) {
  const [start, end] = getBreakpointRange(name);

  // Relative length units in media queries are based on the initial (browser-provided) value
  // of font-size on the HTML element. Therefore, the 0.1rem == 1px mapping we use elsewhere
  // does not work here and we have to divide by 16.
  // On top of that, Safari has a bug where media queries are based on the _specified_ value of
  // font-size on the HTML element. Using em instead of rem work around that.
  let rule = `(min-width: ${start / 16}em)`;
  if (end) rule += ` and (max-width: ${(end - 1) / 16}em)`;
  return rule;
}

const breakpointValues = Object.values(breakpointsDefinition);

export function getBreakpointRange(name: BreakpointName) {
  const value = breakpointsDefinition[name];

  const index = breakpointValues.indexOf(value);
  const nextValue = breakpointValues[index + 1];
  return [value, nextValue ?? nextValue - 1];
}
