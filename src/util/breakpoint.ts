const breakpoints = {
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1440,
}

export type Breakpoints = {
  [T in keyof typeof breakpoints]: string
}

const makeQuery = (strings: TemplateStringsArray, ...keys: any[]) => {
  const args = [strings, keys]
  const query = [...args[0]]
    .map((_, i) => args.map(x => x[i]))
    .map(x => x.join(""))
    .join("");

  return query;
}

export const lessThan = (bp: keyof Breakpoints) => (
  strings: TemplateStringsArray,
  ...keys: any[]
) => `@media screen and (max-width: ${breakpoints[bp]}px) {
  ${makeQuery(strings, keys)}
}`

export const greaterThan = (bp: keyof Breakpoints) => (
  strings: TemplateStringsArray,
  ...keys: any[]
) => `@media screen and (min-width: ${breakpoints[bp] + 0.025}px) {
  ${makeQuery(strings, keys)}
}`

export default {
  lessThan,
  greaterThan,
}
