import * as React from "react"
import { Link } from "gatsby"
import classnames from "classnames"
import * as style from "./scrollTopButton.module.scss"

const ScrollTopButton = ({className} : { className? : string }) => (
  <button className={ classnames(style.wrapper, className) } />
)
export default ScrollTopButton
