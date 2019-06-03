export const breakpoints = {
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1440,
}

export type Breakpoint = keyof typeof breakpoints
export type BreakpointRange = Breakpoint | "over"

export type Orientation = "none" | "portrait" | "landscape"

const makeQuery = (strings: TemplateStringsArray, ...keys: any[]) => {
  const args = [strings, keys]
  const query = [...args[0]]
    .map((_, i) => args.map(x => x[i]))
    .map(x => x.join(""))
    .join("")

  return query
}

export const lessThan = (bp: Breakpoint, orient: Orientation = "none") => (
  strings: TemplateStringsArray,
  ...keys: any[]
) => `@media screen and (max-width: ${breakpoints[bp]}px)${
  orient !== "none" ? ` and (orientation: ${orient})` : ""
} {
  ${makeQuery(strings, keys)}
}`

export const greaterThan = (bp: Breakpoint, orient: Orientation = "none") => (
  strings: TemplateStringsArray,
  ...keys: any[]
) => `@media screen and (min-width: ${breakpoints[bp] + 0.025}px)${
  orient !== "none" ? ` and (orientation: ${orient})` : ""
} {
  ${makeQuery(strings, keys)}
}`

export default {
  lessThan,
  greaterThan,
}
