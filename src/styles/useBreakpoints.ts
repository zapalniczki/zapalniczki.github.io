import { useEffect, useState } from "react";
import { breakpoints } from "./theme";

type Breakpoint = keyof typeof breakpoints;

const useBreakpoints = (breakpointsNames: string) => {
  const breakpointsNamesArray = breakpointsNames
    .replace(/[^a-z|A-Z|\s]/g, "")
    .split(" ");
  const queries = breakpointsNamesArray.map((breakpoint) => {
    const breakpointsArray = Object.entries(breakpoints);
    const index = breakpointsArray.findIndex((elem) => elem[0] === breakpoint);
    const start =
      index === 0
        ? undefined
        : `( min-width: ${breakpointsArray[index - 1][1]})`;
    const end =
      index === breakpointsArray.length - 1
        ? undefined
        : `( max-width: ${breakpoints[breakpoint as Breakpoint]})`;

    return [start, end].filter((value) => value).join(" and ");
  });

  const queriesString = queries.join(" and ");
  const mediaQuery = window.matchMedia(queriesString);
  const [match, setMatch] = useState<boolean>(mediaQuery.matches);

  useEffect(() => {
    const handleChange = (event: MediaQueryListEvent) =>
      setMatch(event.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.addEventListener("change", handleChange);
  }, [mediaQuery]);

  return match;
};

export default useBreakpoints;
