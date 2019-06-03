import * as React from "react"

export interface IRoutingContext {
  current: string
  update: (path: string) => void
}

export default React.createContext<IRoutingContext | null>(null)

export const initRoutingStore: (
  initialState: string
) => IRoutingContext = initialState => {
  const [current, setCurrent] = React.useState(initialState)

  return {
    current,
    update: path => setCurrent(path),
  }
}
