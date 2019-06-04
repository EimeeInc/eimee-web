import * as React from "react";
import Overlay from "@/components/Molecule/Overlay";
import OverlayButton from "@/components/Atom/OverlayButton";
import HomeButton from "@/components/Atom/HomeButton";
import OverlayContext, { initOverlayStore } from "@/contexts/Overlay";
import styled from "@emotion/styled";
import media from "@/util/breakpoint";

const StyledHomeButton = styled(HomeButton)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 150;
`;

const StyledOverlayButton = styled(OverlayButton)`
  position: fixed;
  top: 0;
  right: 0;
  width: 80px;
  height: 80px;
  z-index: 200;

  ${media.lessThan("md")`
    width: 60px;
    height: 60px;
  `}
`;

const StyledOverlay = styled(Overlay)`
  z-index: 150;
`;

const Header = ({ className }: { className?: string }) => {
  const overlayStore = initOverlayStore(false);

  return (
    <header className={className}>
      <StyledHomeButton />
      <OverlayContext.Provider value={overlayStore}>
        <StyledOverlayButton />
        <StyledOverlay />
      </OverlayContext.Provider>
    </header>
  );
};

export default Header;
