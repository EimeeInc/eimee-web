import * as React from "react"
import classnames from "classnames"
import * as style from "./overlayButton.module.scss"
import OverlayContext, { initOverlayStore } from "@/contexts/overlay";

const Overlay = ({className } : { className? : string }) => {
  const overlayContext = React.useContext(OverlayContext) || initOverlayStore(false);

  return (
    <div className={ classnames(style.wrapper, { [style.isActive]: overlayContext.isActive }, className) } onClick={overlayContext.toggle}>
      <div className={ style.transformContainer }>
        <span className={ style.line } />
        <span className={ style.line } />
        <span className={ style.line } />
      </div>
    </div>
  )
}

export default Overlay
