import * as React from "react";
import MediaQueryContext, { initMediaQueryStore } from "@/contexts/MediaQuery";
import { breakpoints, BreakpointRange } from "@/util/breakpoint";

const MediaQuery = () => {
  const mediaQueryContext =
    React.useContext(MediaQueryContext) || initMediaQueryStore("sm");

  if (typeof window !== "undefined" && window.matchMedia) {
    React.useEffect(() => {
      const creteMatchMedia = (
        bp: BreakpointRange,
        min?: number,
        max?: number,
      ): [
        MediaQueryList,
        (this: MediaQueryList, eve?: MediaQueryListEvent) => void
      ] => {
        const query = `screen${min ? ` and (min-width: ${min}px)` : ""}${
          max ? ` and (max-width: ${max}px)` : ""
        }`;
        const mql = window.matchMedia(query);
        const callback = function(
          this: MediaQueryList,
          eve?: MediaQueryListEvent,
        ) {
          if (mql.matches) mediaQueryContext.update(bp);
        };

        callback.call(mql);
        mql.addListener(callback);

        return [mql, callback];
      };

      const mqls: {
        mql: MediaQueryList;
        callback: (this: MediaQueryList, eve: MediaQueryListEvent) => void;
      }[] = [];

      let oldWidth: number | undefined;
      for (const [bp, width] of Object.entries(breakpoints)) {
        const [mql, callback] = creteMatchMedia(
          bp as BreakpointRange,
          oldWidth,
          width,
        );

        mqls.push({ mql, callback });
        oldWidth = width;
      }

      const [mql, callback] = creteMatchMedia("over", oldWidth, undefined);
      mqls.push({ mql, callback });

      return () => {
        for (const { mql, callback } of mqls) {
          mql.removeListener(callback);
        }
      };
    }, []);
  }

  return <></>;
};

export default MediaQuery;
