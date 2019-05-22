import { Link } from "gatsby"
import * as React from "react"
import * as style from "./header.module.scss"
import Overlay from "@/components/overlay"
import OverlayButton from "@/components/overlayButton"
import HomeButton from "@/components/homeButton"
import OverlayContext, { initOverlayStore } from "@/contexts/overlay";

const Header = () => {
  const overlayStore = initOverlayStore(false);

  return (
    <header>
      <HomeButton className={style.homeButton}/>
      <OverlayContext.Provider value={ overlayStore } >
        <OverlayButton className={style.closeButton} />
        <Overlay className={style.overlay} />
      </OverlayContext.Provider>
    </header>
  )
}

export default Header
