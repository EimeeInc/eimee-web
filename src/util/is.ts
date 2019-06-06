export const isNotNull = <T>(value: T): value is Exclude<T, null | undefined> =>
  value != null;

export const isArrayLike = <T = any>(value: any): value is ArrayLike<T> =>
  value && value.length;

export const isFunction = <T extends Function>(value: any): value is T =>
  value && typeof value === "function";

export const isReactElement = <T>(value: any): value is React.ReactElement<T> =>
  value && typeof value.type === "function";

export const isReactNodeArray = (value: any): value is React.ReactNodeArray =>
  value && value.length && value.find;
