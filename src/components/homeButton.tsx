import * as React from "react"
import { Link } from "gatsby"
import classnames from "classnames"
import * as style from "./homeButton.module.scss"

const HomeButton = ({className} : { className? : string }) => (
  <Link className={ classnames(style.wrapper, className) } to="/" />
)

export default HomeButton
