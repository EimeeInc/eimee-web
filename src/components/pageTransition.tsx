import * as React from "react"
import classnames from "classnames";
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"
import * as style from "./pageTransition.module.scss"

const Transition = ({ children, location } : { children: React.ReactNode, location: Location }) => (
  <TransitionGroup>
    <ReactTransition
      key={location.pathname}
      timeout={{
        enter: 1300,
        exit: 800,
      }}
    >
      {status => (
        <>
          <div className={classnames(style.wrapper, status)}>
            {children}
          </div>
          <div className={classnames(style.loading, status)}>
            <div className="fl">
              <div className="spinner6">
                <div className="rect1" />
                <div className="rect2" />
                <div className="rect3" />
                <div className="rect4" />
                <div className="rect5" />
              </div>
            </div>
          </div>
        </>
      )}
    </ReactTransition>
  </TransitionGroup>
)

export default Transition