import * as React from "react"
import { Link } from "gatsby"
import classnames from "classnames"

const ScrollTopButton = ({className} : { className? : string }) => (
  <button className={ classnames(style.wrapper, className) } />
)
export default ScrollTopButton
