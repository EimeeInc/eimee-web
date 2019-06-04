import * as React from "react";

export interface IOverlayContext {
  isActive: boolean;
  toggle: () => void;
}

export default React.createContext<IOverlayContext | null>(null);

export const initOverlayStore: (
  initialState: boolean,
) => IOverlayContext = initialState => {
  const [isActive, setIsActive] = React.useState(initialState);

  return {
    isActive,
    toggle: () => setIsActive(!isActive),
  };
};
