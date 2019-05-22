import * as React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import classnames from "classnames"
import * as style from "./topBackground.module.scss"

const TopBackground = ({ className } : { className? : string }) => (
  <div className={classnames(style.wrapper, className)}>
    {
      Array.from(Array(4).keys()).map((i) => (
        <div className={ style.background } key={i} />
      ))
    }
    <div className={ style.logo } />
  </div>
)

export default TopBackground
