const breakpoints = {
  sm: 480,
  md: 768,
};

export type Breakpoints = {
  sm: string,
  md: string,
};

export const lessThan = (bp: keyof Breakpoints) => (strings: TemplateStringsArray, ...keys: any[]) => {
  const args = [strings, keys];
  const query = [...args[0]]
    .map((_, i) => args.map(x => x[i]))
    .map(x => x.join(""))
    .join("");

  return `@media screen and (max-width: ${breakpoints[bp]}px) {
    ${query}
  }`;
}

export default {
  lessThan
}
