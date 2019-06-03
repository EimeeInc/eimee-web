import * as React from "react"
import { BreakpointRange } from "@/util/breakpoint"

export interface IMediaQueryContext {
  current: BreakpointRange
  update: (bp: BreakpointRange) => void
}

export default React.createContext<IMediaQueryContext | null>(null)

export const initMediaQueryStore: (
  initialState: BreakpointRange
) => IMediaQueryContext = initialState => {
  const [current, setCurrent] = React.useState(initialState)

  return {
    current,
    update: bp => setCurrent(bp),
  }
}
